import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import customAxios from "../../config/requast";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const ref = useRef(null);

  const [message, setMessage] = useState("m");
  console.log(id);

  useEffect(() => {
    customAxios.get(`/messages/${id}`).then((res) => {
      setMessage(res.data.name);
    });
  }, []);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    customAxios
      .put(`/messages/${id}`, data)
      .then((res) => {
        console.log(id);
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
          Edit message
        </Typography>
        <div>
          <TextField
            // ref={ref}
            defaultValue={message}
            fullWidth
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
