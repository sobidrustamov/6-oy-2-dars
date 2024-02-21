import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { loadState } from "../lib/storage";

export const MainLayout = () => {
  // const user = loadState("user");
  // if (!user) return <Navigate to="/" replace />;
  return (
    <div>
      <Header />
      <Grid container>
        <Grid
          item
          sx={{ bgcolor: "#fbe9e7", height: "90vh", padding: "20px" }}
          xs={3}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum velit
          cum aspernatur distinctio perspiciatis qui numquam eaque beatae sunt
          asperiores dolorum veritatis saepe itaque expedita reiciendis
          consectetur culpa illum nobis ipsam odio, consequuntur, obcaecati non
          rem. Ducimus accusantium doloremque animi commodi, vel facere
          exercitationem suscipit neque, error veniam id mollitia.
        </Grid>
        <Grid item xs={9} p="20px">
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};
