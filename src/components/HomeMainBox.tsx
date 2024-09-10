import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const HomeMainBox = ({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap?: number;
}) => {
  return (
    <Paper
      sx={{
        height: "20vh",
        width: "70vw",
        display: "flex",
        boxShadow: 10,
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <Box sx={{ padding: 5, display: "flex", flexDirection: "column" }}>
        <Typography>Bem vindo(a) {sessionStorage.getItem("email")}!</Typography>
        <Box
          sx={{
            padding: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            gap: gap ? gap : 2,
            flex: "1 1 50%",
          }}
        ></Box>
      </Box>
    </Paper>
  );
};

export default HomeMainBox;
