import React, { ReactElement, FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ProtectedRoute } from "./ProtectedRoute";
import { Link, useNavigate } from "react-router-dom";

interface IDetailsPageProps {}

const Details: FC<IDetailsPageProps> = (): ReactElement => {
  let navigate = useNavigate()
  return (
    <ProtectedRoute>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "whitesmoke",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Details Page</Typography>
        <Button onClick={() => {navigate(-1)}}>GO BACK</Button>
      </Box>
    </ProtectedRoute>
  );
};

export default Details;
