import { JSX, useState, useEffect, useCallback } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Functions } from "@/functions";
import type { HerobannerTypes } from "@/types";

let functions: Functions;

const HeroBanner = (props: HerobannerTypes): JSX.Element => {
    const { contentEntry } = props;
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [load, setLoad] = useState<boolean>(true);
    const src = String(contentEntry.fields.featureImage.fields.file?.url ?? "");
    functions = new Functions();

    const loadImgSrc = useCallback(
        (): string =>
            functions.imageSrc({
                setLoad,
                src,
            }),
        [src]
    );

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        loadImgSrc();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [src, loadImgSrc]);

    const heroImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${src})`,
        position: "relative",
        width: "100%",
        height: "600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transform: `translateY(${scrollPosition * 0.25}px)`,
        zIndex: -1,
    };

    const skeletonImg = {
        height: "600px",
        backgroundColor: "primary.main",
    };

    const textBlock = {
        zIndex: 1,
        pl: { lg: 12, md: 6, sm: 4, xs: 2 },
        pt: 40,
        position: "relative",
        transform: `translateY(${scrollPosition * -0.25}px)`,
    };

    return (
        <Box id="hero-banner" sx={{ mt: `${scrollPosition * -0.25}px` }}>
            <Box id="background-image" sx={load ? skeletonImg : heroImage}>
                <Box id="text-block" sx={textBlock}>
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
                </Box>
            </Box>
        </Box>
    );
};
export default HeroBanner;
