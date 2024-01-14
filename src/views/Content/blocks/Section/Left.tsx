import { JSX } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { SectionTypes } from "@/types";

const Left = (props: SectionTypes): JSX.Element => {
    const { contentEntry } = props;

    return (
        <>
            {contentEntry && (
                <Grid container direction="row" spacing={2}>
                    <Grid xs={12} sm={6}>
                        <Typography id="sectionHeadline" variant="h2">
                            {contentEntry.fields.headline}
                        </Typography>
                        <Typography color="textSecondary">
                            {contentEntry.fields.body}
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={6}></Grid>
                </Grid>
            )}
        </>
    );
};
export default Left;