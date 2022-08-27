import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import { ProtectedRoute } from "./ProtectedRoute";

interface IDetailsPageProps {}

const Details: FC<IDetailsPageProps> = (): ReactElement => {
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
      </Box>
    </ProtectedRoute>
  );
};

export default Details;
