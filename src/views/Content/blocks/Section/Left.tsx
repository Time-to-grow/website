import { JSX } from "react";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { SectionTypes } from "@/types";

const Left = (props: SectionTypes): JSX.Element => {
    const { contentEntry, id } = props;

    const { url } = contentEntry.fields.image.fields.file || {};

    return (
        <>
            {contentEntry && (
                <Grid
                    container
                    direction="row"
                    sx={{ my: 2 }}
                    spacing={2}
                    id={id}>
                    <Grid xs={12} sm={6}>
                        <Typography id="sectionHeadline" variant="h2">
                            {contentEntry.fields.headline}
                        </Typography>
                        <Typography color="textSecondary">
                            {contentEntry.fields.body}
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        {contentEntry.fields.image && (
                            <CardMedia
                                component="img"
                                // sx={{ width: "100%", height: "auto" }}
                                src={String(url)}
                                alt={`image ${contentEntry.fields.headline}`}
                            />
                        )}
                    </Grid>
                </Grid>
            )}
        </>
    );
};
export default Left;
