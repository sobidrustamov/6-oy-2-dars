import { Stack, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

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
      <Button
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/");
        }}
        variant="outlined"
      >
        Log out
      </Button>
    </Stack>
  );
};
