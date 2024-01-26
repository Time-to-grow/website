import { JSX } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ParallaxImage } from "@/components/ParallaxImage";
import type { SectionTypes } from "@/types";

const Center = (props: SectionTypes): JSX.Element => {
    const { contentEntry } = props;

    const { url } = contentEntry.fields.image.fields.file || {};

    return (
        <Stack alignItems="center" spacing={2}>
            {contentEntry.fields.image && (
                <Box>
                    <ParallaxImage height={800} src={String(url)} speed={1}>
                        {contentEntry?.fields.headline && (
                            <Typography
                                color="white"
                                id="sectionHeadline"
                                align="center"
                                variant="h3"
                                sx={{
                                    pt: { xs: 2, md: 4 },
                                    my: 2,
                                    position: "relative",
                                }}>
                                {contentEntry.fields.headline}
                            </Typography>
                        )}
                        <Typography color="white">
                            {contentEntry?.fields.body}
                        </Typography>
                        {contentEntry?.fields.ctaLabel && (
                            <Button
                                id="sectionCta"
                                href={contentEntry.fields.ctaSlug}
                                variant="contained"
                                sx={{ mt: 4, mb: 4 }}>
                                {contentEntry.fields.ctaLabel}
                            </Button>
                        )}
                    </ParallaxImage>
                </Box>
            )}
        </Stack>
    );
};

export default Center;
