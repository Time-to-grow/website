import { JSX } from "react";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Footer = (): JSX.Element => {
    return (
        <>
            <Stack sx={{ backgroundColor: "text.primary", py: 2 }}>
                <Typography align="center" color="white" variant="body1">
                    View the source for this site{" "}
                    <Link
                        color="inherit"
                        underline="always"
                        sx={{
                            "&:hover": { color: "primary.light" },
                        }}
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/el-zacharoo/portfolio">
                        here
                    </Link>
                </Typography>
            </Stack>
        </>
    );
};
export default Footer;
