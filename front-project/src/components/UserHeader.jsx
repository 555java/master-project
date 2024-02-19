import { Avatar, Box, Card, Typography } from "@mui/material";
import { nameToColor } from "../utils/getRandomAccountColor";
import { SubscriptionsButton } from "./SubscriptionsButton";

export const UserHeader = ({ user }) => {
  const username = user.username;
  const avatarColor = nameToColor(username);
  return (
    <Card
      sx={{
        padding: "10px 30px 10px 20px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#d2baff4d",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          bgcolor: avatarColor,
          width: 60,
          height: 60,
          fontSize: "30px",
          marginRight: "30px",
        }}
      >
        {username.slice(0, 1).toUpperCase()}
      </Avatar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">
            {username.slice(0, 1).toUpperCase() + username.slice(1)}
          </Typography>
          <Typography variant="h7">{user.email}</Typography>
        </Box>

        <Box>
          <SubscriptionsButton user={user} />
        </Box>
      </Box>
    </Card>
  );
};
