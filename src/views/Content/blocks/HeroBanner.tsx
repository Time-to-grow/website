import { JSX, useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import { Functions } from "@/functions";
import type { HerobannerTypes } from "@/types";

let functions: Functions;

const HeroBanner = (props: HerobannerTypes): JSX.Element => {
    const { contentEntry } = props;
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [load, setLoad] = useState<boolean>(true);

    const src = String(contentEntry.fields.featureImage.fields.file?.url ?? "");
    const parallaxDepth = 0.25;
    const height = { xl: 800, lg: 600, md: 500, sm: 400, xs: 300 };
    functions = new Functions();

    useEffect(() => {
        functions.imageSrc({ setLoad, src });

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [src]);

    const heroImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${src})`,
        position: "relative",
        width: "100%",
        height,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transform: `translateY(${scrollPosition * parallaxDepth}px) scale(1.1)`,
        zIndex: -1,
    };

    const textBlock = {
        zIndex: 1,
        pl: { lg: 20, md: 6, sm: 4, xs: 2 },
        pt: 40,
        position: "relative",
        transform: `translateY(${
            scrollPosition * -parallaxDepth
        }px) scale(1.1)`,
    };

    return (
        <Box sx={{ overflow: "hidden" }} id="hero-banner">
            {!load ? (
                <Box id="background-image" sx={heroImage}>
                    <Box id="text-block" sx={textBlock}>
                        <Typography
                            id="hero-headline"
                            variant="h1"
                            color="white">
                            {contentEntry.fields.headline}
                        </Typography>
                        <Typography
                            id="hero-body"
                            variant="h5"
                            color="white"
                            sx={{ maxWidth: "50%", my: 2 }}>
                            {contentEntry.fields.body}
                        </Typography>
                    </Box>
                </Box>
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
