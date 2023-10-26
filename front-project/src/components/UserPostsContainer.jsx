import { Box, Card, CardMedia, Modal } from "@mui/material";
import { PostPreview } from "./PostPreview";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

export const UserPostsContainer = ({ posts }) => {
  const [openModalPost, setModal] = useState(false);
  const handleOpenModal = (post) => setModal(post);
  const handleCloseModal = () => setModal(false);
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "10px 0",
        flexWrap: "wrap",
      }}
    >
      {posts.map((post) => (
        <Grid
          xs={12}
          sm={6}
          md={4}
          xl={3}
          sx={{ padding: "5px" }}
          key={post._id}
        >
          <Card
            onClick={() => {
              handleOpenModal(post);
            }}
            key={post._id}
            id={post._id}
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "2/1",
            }}
          >
            <CardMedia
              component="img"
              src={`${post.image[0].url}?w=248&fit=crop&auto=format`}
              srcSet={`${post.image[0].url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={post.title}
              loading="lazy"
            />
          </Card>
        </Grid>
      ))}

      <Modal
        open={!!openModalPost}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <PostPreview post={openModalPost} />
        </Box>
      </Modal>
    </Grid>
  );
};
