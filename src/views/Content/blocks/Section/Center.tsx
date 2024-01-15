import { JSX, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { SectionTypes } from "@/types";

const Center = (props: SectionTypes): JSX.Element => {
    const { contentEntry } = props;
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const { url } = contentEntry.fields.image.fields.file ?? {};

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Stack alignItems="center" spacing={2}>
            {contentEntry.fields.image && (
                <Box>
                    <CardMedia
                        component="img"
                        sx={{
                            py: 5,
                            width: "100%",
                            transform: `translateY(${scrollPosition * 0.25}px)`,
                            position: "relative",
                            // zIndex: -1,
                        }}
                        src={String(url)}
                        alt={`image ${contentEntry.fields.headline}`}
                    />
                </Box>
            )}
            {contentEntry?.fields.headline && (
                <Typography
                    id="sectionHeadline"
                    align="center"
                    variant="h3"
                    sx={{ pt: { xs: 2, md: 4 }, my: 2 }}>
                    {contentEntry.fields.headline}
                </Typography>
            )}
            <Typography>{contentEntry?.fields.body}</Typography>
            {contentEntry?.fields.ctaLabel && (
                <Button
                    id="sectionCta"
                    href={contentEntry.fields.ctaSlug}
                    variant="contained"
                    sx={{ mt: 4, mb: 4 }}>
                    {contentEntry.fields.ctaLabel}
                </Button>
            )}
        </Stack>
    );
};

export default Center;
