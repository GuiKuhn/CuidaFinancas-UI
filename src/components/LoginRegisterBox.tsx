import { Box, Paper } from "@mui/material";
import image from "../assets/imagem-financias.jpg";
import React from "react";

const LoginRegisterBox = ({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap?: number;
}) => {
  return (
    <Paper
      sx={{
        height: "80vh",
        width: "70vw",
        display: "flex",
        boxShadow: 10,
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          padding: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: gap ? gap : 2,
          flex: "1 1 50%",
          mb: 10,
        }}
      >
        {children}
      </Box>
      <Box sx={{ flex: "1 1 50%" }}>
        <img
          src={image}
          alt="imagem"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Paper>
  );
};

export default LoginRegisterBox;
