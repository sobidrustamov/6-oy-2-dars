import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import customAxios from "../../config/requast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    customAxios
      .post("/messages", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data);
      })
      .finally(() => {
        navigate("/app");
      });
    reset();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <form onSubmit={handleSubmit(submit)} style={{ width: "600px" }}>
        <Typography variant="h4" component="h4" my="10px" textAlign="center">
          New message
        </Typography>
        <div>
          <TextField
            fullWidth
            placeholder="New message"
            sx={{ mb: "10px" }}
            {...register("name", { required: true })}
          />
        </div>

        <Button type="submit" fullWidth variant="contained">
          Save
        </Button>
      </form>
    </div>
  );
};
