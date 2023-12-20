import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createAppStore } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignInPage } from "./routes/SignInPage";
import { SignUpPage } from "./routes/SignUpPage";
import App from "./routes/App";
import { createTheme, ThemeProvider } from "@mui/material";
import { getUserThunk } from "./redux/auth/auth.thunks";
import CssBaseline from "@mui/material/CssBaseline";
import PostUploadForm from "./routes/PostUploadForm";
import PostPage from "./routes/PostPage";
import { UserPostsListPage } from "./routes/UserPostsListPage";
import { AboutPage } from "./routes/AboutPage";
import { SubscriptionsList } from "./routes/SubscriptionsPage";
import { ExplorePage } from "./routes/ExplorePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
      {
        path: "/posts/new",
        element: <PostUploadForm />,
      },
      { path: "/posts/:postId", element: <PostPage /> },
      { path: "/posts/user/:userId", element: <UserPostsListPage /> },
      { path: "/user/:userId/subscriptions", element: <SubscriptionsList /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/explore", element: <ExplorePage /> },
    ],
  },
]);

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#8e24aa",
    },
    secondary: {
      main: "#b39ddb",
    },
    accent1: {
      main: "#d2baff4d",
    },
  },
});
const store = createAppStore(router);
store.dispatch(getUserThunk());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
