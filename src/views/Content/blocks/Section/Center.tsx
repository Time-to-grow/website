import { JSX } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { SectionTypes } from "@/types";

const Center = (props: SectionTypes): JSX.Element => {
    const { contentEntry } = props;

    // const { url } = contentEntry.fields.image.fields.file ?? {};

    return (
        <Stack alignItems="center" spacing={2} >
            {/* {contentEntry.fields.image &&
                <CardMedia
                    component="img"
                    sx={{ width: "100%", height: "auto" }}
                    src={url as string}
                    alt={contentEntry.fields.image.fields.title as string}
                />
            } */}
            {contentEntry?.fields.headline &&
                <Typography id="sectionHeadline" align="center" variant="h3" sx={{ pt: { xs: 2, md: 4 }, my: 2 }}>
                    {contentEntry.fields.headline}
                </Typography>
            }
            <Typography>
                {contentEntry?.fields.body}
            </Typography>
            {contentEntry?.fields.ctaLabel &&
                <Button id="sectionCta" href={contentEntry.fields.ctaSlug} variant="contained" sx={{ mt: 4, mb: 4 }}>
                    {contentEntry.fields.ctaLabel}
                </Button>
            }
        </Stack>
    );
};

export default Center;