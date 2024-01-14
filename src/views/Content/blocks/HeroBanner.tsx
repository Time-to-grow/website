import { JSX } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import type { THerobanner } from "@/types";

const HeroBanner = (props: THerobanner): JSX.Element => {
    const { contentEntry } = props;
    const navigate = useNavigate();

    const heroImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${contentEntry.fields.featureImage.fields.file?.url})`,
        position: "relative",
        height: { lg: "75vh", md: "55vh", sm: "45vh", xs: "35vh" },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    const heroText = {
        pl: { lg: 12, md: 6, sm: 4, xs: 2 },
        pt: 40,
    };

    return (
        <Box sx={heroImage}>
            <Box sx={heroText}>
                <Typography variant="h1" color="white">
                    {contentEntry.fields.headline}
                </Typography>
                <Typography
                    variant="h5"
                    color="white"
                    sx={{ maxWidth: "50%", my: 2 }}>
                    {contentEntry.fields.body}
                </Typography>
                <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    onClick={() => navigate(`/${contentEntry.fields.ctaLink}`)}>
                    {contentEntry.fields.ctaLabel}
                </Button>
            </Box>
        </Box>
    );
};
export default HeroBanner;
