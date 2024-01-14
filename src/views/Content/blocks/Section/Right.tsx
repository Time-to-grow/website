import { JSX } from "react";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { SectionTypes } from "@/types";

const Right = (props: SectionTypes): JSX.Element => {
    const { contentEntry } = props;

    const { url } = contentEntry.fields.image.fields.file ?? {};

    return (
        <>
            {contentEntry && (
                <Grid container direction="row-reverse" spacing={2}>
                    <Grid xs={12} sm={6}>
                        {contentEntry.fields.image.fields.file?.url && (
                            <CardMedia
                                component="img"
                                sx={{ width: "100%", height: "auto" }}
                                src={url as string}
                                alt={
                                    contentEntry.fields.image.fields
                                        .title as string
                                }
                            />
                        )}
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Typography
                            id="sectionHeadline"
                            align="center"
                            variant="h2">
                            {contentEntry.fields.headline}
                        </Typography>
                    </Grid>
                    <Typography>{contentEntry.fields.body}</Typography>
                </Grid>
            )}
        </>
    );
};
export default Right;
