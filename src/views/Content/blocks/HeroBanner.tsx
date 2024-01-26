import { JSX, useState } from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import { ParallaxImage } from "@/components/ParallaxImage";
import { useImageSrc } from "@/hooks";
import type { HerobannerTypes } from "@/types";

const HeroBanner = (props: HerobannerTypes): JSX.Element => {
    const { contentEntry, id } = props;
    const [load, setLoad] = useState<boolean>(true);

    const src = String(contentEntry.fields.featureImage.fields.file?.url ?? "");
    const height = { xl: 800, lg: 600, md: 500, sm: 400, xs: 300 };

    useImageSrc(setLoad, src);

    return (
        <Box id={id}>
            {!load ? (
                <ParallaxImage height={800} src={src} speed={1}>
                    <Typography id="hero-headline" variant="h1" color="white">
                        {contentEntry.fields.headline}
                    </Typography>
                    <Typography
                        id="hero-body"
                        variant="h5"
                        color="white"
                        sx={{ maxWidth: "50%", my: 2 }}>
                        {contentEntry.fields.body}
                    </Typography>
                </ParallaxImage>
            ) : (
                <Skeleton
                    id="img-skeleton"
                    variant="rectangular"
                    width="100%"
                    height={height.xl}
                />
            )}
        </Box>
    );
};

export default HeroBanner;
