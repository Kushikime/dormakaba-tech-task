import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import { ProtectedRoute } from "./ProtectedRoute";

interface IDashboardPageProps {}

const Dashboard: FC<IDashboardPageProps> = (): ReactElement => {
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
        <Typography variant="h3">Dashboard Page</Typography>
      </Box>
    </ProtectedRoute>
  );
};

export default Dashboard;
