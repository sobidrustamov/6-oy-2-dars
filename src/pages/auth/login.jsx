import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import customAxios from "../../config/requast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loadState, saveState } from "../../lib/storage";

export const Login = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    customAxios
      .post("login", data)
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
          <div>
            <TextField
              fullWidth
              // value="alisherbek@mail.com"
              placeholder="Email"
              sx={{ mb: "10px" }}
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <TextField
              fullWidth
              // value="123456"
              type="password"
              placeholder="Password"
              sx={{ mb: "10px" }}
              {...register("password", { required: true })}
            />
          </div>
          <Button type="submit" fullWidth variant="contained">
            Login
          </Button>
        </form>
      </Stack>
    </Stack>
  );
};
