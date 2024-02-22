import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import customAxios from "../../config/requast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loadState, saveState } from "../../lib/storage";

export const Register = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    customAxios
      .post("/register", data)
      .then((res) => {
        saveState("user", res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data);
      })
      .finally(() => {
        if (loadState("user")) navigate("/app");
      });
    reset();
  };

  const toLogin = () => {
    navigate("/");
  };
  return (
    <Stack
      sx={{
        position: "absolute",
        inset: 0,
        bgcolor: "#0074e9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack width="500px" bgcolor="#fff" borderRadius="15px" padding="20px">
        <form onSubmit={handleSubmit(submit)}>
          <Typography variant="h4" component="h4" my="10px" textAlign="center">
            Register
          </Typography>
          <div>
            <TextField
              fullWidth
              placeholder="Firstname"
              sx={{ mb: "10px" }}
              {...register("firstname", { required: true })}
            />
          </div>
          <div>
            <TextField
              fullWidth
              placeholder="Lastname"
              sx={{ mb: "10px" }}
              {...register("lastname", { required: true })}
            />
          </div>
          <div>
            <TextField
              fullWidth
              placeholder="Email"
              sx={{ mb: "10px" }}
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <TextField
              fullWidth
              type="password"
              placeholder="Password"
              sx={{ mb: "10px" }}
              {...register("password", { required: true })}
            />
          </div>
          <div>
            <TextField
              fullWidth
              type="number"
              placeholder="Age"
              sx={{ mb: "10px" }}
              {...register("age")}
            />
          </div>
          <Button type="submit" fullWidth variant="contained">
            Login
          </Button>
          <p style={{ padding: "10px" }}>
            Already have an account?{" "}
            <Link sx={{ color: "blue" }} onClick={toLogin}>
              Sign In
            </Link>
          </p>
        </form>
      </Stack>
    </Stack>
  );
};
