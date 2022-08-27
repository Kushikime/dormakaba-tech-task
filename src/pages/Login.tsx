import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

interface ILoginPageProps {}

const Login: FC<ILoginPageProps> = (props): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3">Login Page</Typography>
        </Box>
    );
};

export default Login;