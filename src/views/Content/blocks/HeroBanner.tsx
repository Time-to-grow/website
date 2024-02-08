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
            <ParallaxImage src={src} speed={1}>
                <Typography
                    align="center"
                    id="hero-headline"
                    variant="h1"
                    color="white">
                    {contentEntry.fields.headline}
                </Typography>
            </ParallaxImage>
        </Box>
    );
};

export default HeroBanner;
