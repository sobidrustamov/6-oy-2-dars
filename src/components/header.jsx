import { Stack, Button } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Stack
      sx={{
        padding: "24px 50px",
        height: "10vh",
        color: "blue",
        bgcolor: "#e0e0e0",
      }}
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      justifyContent="space-between"
      useFlexGap
      flexWrap="wrap"
    >
      <h2>Logo</h2>
      <Button variant="outlined">Log out</Button>
    </Stack>
  );
};
