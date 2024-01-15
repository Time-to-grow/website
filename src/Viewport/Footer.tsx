import { JSX } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Footer = (): JSX.Element => {
    const fullYear = new Date().getFullYear();
    const appName = import.meta.env.VITE_APP_NAME || "";

    return (
        <>
            <Stack
                sx={{ backgroundColor: "secondary.main", py: 10 }}
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Typography
                    textTransform="uppercase"
                    align="center"
                    color="white"
                    variant="body1">
                    Have a question? Get in touch.
                </Typography>
                <Button size="large" color="info" variant="outlined">
                    Contact Us
                </Button>
            </Stack>
            <Stack sx={{ backgroundColor: "primary.main", py: 2 }} spacing={2}>
                <Typography align="center" color="white" variant="body2">
                    &copy; Copyright {fullYear} {appName}.
                </Typography>
                <Typography align="center" color="white" variant="body2">
                    All rights reserved.
                </Typography>
            </Stack>
        </>
    );
};
export default Footer;
