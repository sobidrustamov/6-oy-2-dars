import React, { useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { loadState } from "../lib/storage";

export const MainLayout = () => {
  const navigate = useNavigate();
  const user = loadState("user");
  if (!user) return <Navigate to="/" replace />;

  const createMessage = () => {
    navigate("create");
  };
  return (
    <div>
      <Header />
      <Grid container>
        <Grid
          item
          sx={{ bgcolor: "#fbe9e7", height: "90vh", padding: "20px" }}
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems="self-start"
        >
          <Button variant="contained" onClick={createMessage}>
            Create Message
          </Button>
        </Grid>
        <Grid item xs={10} p="20px">
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};
