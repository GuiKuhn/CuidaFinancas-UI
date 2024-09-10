import { Box, Paper } from "@mui/material";
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
    </Paper>
  );
};

export default HomeMainBox;
