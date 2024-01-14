import { JSX } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { SectionTypes } from "@/types";

const Column = (props: SectionTypes): JSX.Element => {
    const { contentEntry } = props;

    return (
        <>
            {contentEntry && (
                <>
                    <Typography
                        id="sectionHeadline"
                        align="center"
                        gutterBottom
                        variant="h2">
                        {contentEntry.fields.headline}
                    </Typography>
                    <Grid container></Grid>
                </>
            )}
        </>
    );
};

export default Column;
