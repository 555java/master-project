import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

export const PostPreview = ({ post }) => {
  return (
    <Card
      sx={{
        minWidth: "350px",
        maxWidth: "60%",
        maxHeight: "80%",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        overflow: "auto",
      }}
    >
      <CardHeader subheader={post.title} />
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          image={post.image[0].url}
          sx={{
            maxWidth: "100vw",
            width: "100%",
            objectFit: "contain",
            aspectRatio: "1.4",
          }}
          alt="post preview"
        />
      </Grid>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description.slice(0, 100) + "..."}
          <Link
            component={RouterLink}
            to={`/posts/${post._id}`}
            variant="body2"
          >
            {"See full post"}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};
