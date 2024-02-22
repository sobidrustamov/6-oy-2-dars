import React, { useEffect, useState } from "react";
import customAxios from "../../config/requast";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    customAxios.get("/messages").then((res) => {
      setData(res.data);
    });
  }, [deleted]);

  const deleteMes = (id) => {
    console.log(id);
    customAxios.delete(`/messages/:${id}`).then((res) => {
      const del = res.data;
      setDeleted(del);
      console.log(res.data);
    });
  };

  const editMes = (id) => {
    // customAxios.get(`/messages/${id}`).then((res) => {
    //   console.log(res.data);
    //   localStorage.setItem("message", res.data.name);
    // });

    // localStorage.setItem("id", id);
    navigate(`edit/${id}`);
  };

  return (
    <div style={{ overflow: "scroll", maxHeight: "84vh" }}>
      <Typography variant="h4">Messages List</Typography>
      {data.map((obj) => {
        return (
          <Stack
            key={obj.id}
            my="20px"
            border="1px solid #999"
            borderRadius="10px"
            p="20px"
            display="flex"
            gap="10px"
          >
            <Typography variant="h5">{obj.name}</Typography>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                onClick={() => {
                  editMes(obj.id);
                }}
                variant="outlined"
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  deleteMes(obj.id);
                }}
                variant="outlined"
                bgcolor="red"
              >
                Delete
              </Button>
            </div>
          </Stack>
        );
      })}
    </div>
  );
};
