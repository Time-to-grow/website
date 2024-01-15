import { JSX, useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { THerobanner } from "@/types";

const HeroBanner = (props: THerobanner): JSX.Element => {
    const { contentEntry } = props;
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const heroImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${contentEntry.fields.featureImage.fields.file?.url})`,
        position: "relative",
        width: "100%",
        height: "800px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transform: `translateY(${scrollPosition * 0.25}px)`,
        zIndex: -1,
    };

    const textBlock = {
        zIndex: 1,
        pl: { lg: 12, md: 6, sm: 4, xs: 2 },
        pt: 40,
        position: "relative",
        transform: `translateY(${scrollPosition * -0.25}px)`,
    };

    return (
        <Box>
            <Box sx={heroImage}>
                <Box sx={textBlock}>
                    <Typography variant="h1" color="white">
                        {contentEntry.fields.headline}
                    </Typography>
                    <Typography
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
