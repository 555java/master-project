import { Box, Card, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const AboutPage = () => {
  return (
    <Grid
      container
      fixed
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Grid lg={12} md={12} xs={12}>
        <Box
          component="img"
          src="http://localhost:8080/assets/mainphoto.jpeg"
          sx={{
            width: "100%",
            objectFit: "cover",
            objectPosition: "top",
            margin: "0",
            padding: "0",
            maxHeight: "600px",
          }}
          alt="Paella dish"
        />
      </Grid>
      <Grid
        lg={6}
        md={7}
        xs={11}
        sx={{
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          Introducing FakeApp: Simplifying Photo Sharing for Everyone
        </Typography>
      </Grid>
      <Grid
        lg={6}
        md={7}
        xs={11}
        sx={{
          textAlign: "center",
          margin: "20px 0 50px",
        }}
      >
        <Typography variant="h7" sx={{ lineHeight: 1.5, color: "white" }}>
          FakeApp is a simplified project that revolutionizes photo sharing.
          With its user-friendly interface, innovative features, and robust
          privacy settings, FakeApp makes photo sharing accessible to users of
          all skill levels. <br />
          <br />
          FakeApp offers a seamless experience with its intuitive interface.
          Uploading and sharing photos is effortless, allowing users to share
          their favorite moments with ease. Creativity is enhanced with
          FakeApp's built-in editing tools. Users can apply filters, add
          captions, and edit their photos within the app, expressing their
          unique style and vision. <br />
          <br />
          Privacy and security are prioritized, with users having full control
          over who can view and interact with their photos. FakeApp offers
          robust privacy settings, ensuring a comfortable sharing experience.
          The platform encourages community engagement through interest-based
          groups and communities. Users can connect with like-minded
          individuals, fostering inspiration and new perspectives.
          <br />
          <br />
          Join FakeApp today and experience the next generation of photo
          sharing. It's a vibrant community where memories are shared, stories
          are told, and friendships are formed.
        </Typography>
      </Grid>
    </Grid>
  );
};
