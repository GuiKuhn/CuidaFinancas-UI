import React from "react";
import HomeMainBox from "../components/HomeMainBox";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <HomeMainBox>
        <h1>Home</h1>
      </HomeMainBox>
    </Box>
  );
};

export default HomePage;
