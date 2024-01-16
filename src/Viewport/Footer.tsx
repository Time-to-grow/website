import { JSX } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const fullYear = new Date().getFullYear();
const appName = String(import.meta.env.VITE_APP_NAME || "");
const copright = String.fromCharCode(169);

const Footer = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div id="footer">
            <Stack
                id="contact-cta-block"
                sx={{ backgroundColor: "secondary.main", py: 10 }}
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Typography
                    id="contact-cta-text"
                    textTransform="uppercase"
                    align="center"
                    color="white"
                    variant="body1">
                    Have a question? Get in touch.
                </Typography>
                <Button
                    id="contact-cta"
                    size="large"
                    color="info"
                    variant="outlined"
                    onClick={() => navigate("/contact")}>
                    Contact Us
                </Button>
            </Stack>
            <Stack
                id="copyright-block"
                sx={{ backgroundColor: "primary.main", py: 4 }}
                spacing={2}>
                <Typography
                    id="copyright-text"
                    align="center"
                    color="white"
                    variant="body2">
                    {`${copright} Copyright ${fullYear} ${appName}.`}
                </Typography>
            </Stack>
        </div>
    );
};
export default Footer;
