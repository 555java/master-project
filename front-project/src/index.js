import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignInPage } from "./routes/SignInPage";
import { SignUpPage } from "./routes/SignUpPage";
import App from "./app/App";
import { createTheme, ThemeProvider } from "@mui/material";
import { getUserThunk } from "./features-store/auth/auth.thunks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
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
  },
});

store.dispatch(getUserThunk());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
