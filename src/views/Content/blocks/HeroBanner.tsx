import { JSX } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ParallaxImage } from "@/components/ParallaxImage";
import type { HerobannerTypes } from "@/types";

const HeroBanner = (props: HerobannerTypes): JSX.Element => {
    const { contentEntry, id } = props;
    const src = String(contentEntry.fields.featureImage.fields.file?.url || "");

    return (
        <Box id={id}>
            <ParallaxImage
                height={{ lg: "40vw", xs: "80vw" }}
                src={src}
                speed={1}>
                <Typography id="hero-headline" variant="h1" color="white">
                    {contentEntry.fields.headline}
                </Typography>
                {/* <Typography
                    id="hero-body"
                    variant="h5"
                    color="white"
                    sx={{ maxWidth: "50%" }}>
                    {contentEntry.fields.body}
                </Typography> */}
            </ParallaxImage>
        </Box>
    );
};

export default HeroBanner;
