import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import type { GenericContent } from "@/types";

export const QuoteBlock = (props: GenericContent): JSX.Element => {
    const { contentEntry } = props;

    return (
        <Grid
            sx={{ height: { lg: "30vw", xs: 400 } }}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <Grid item>
                <Typography variant="h3" align="center" sx={{ maxWidth: 950 }}>
                    {contentEntry.fields.body}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default QuoteBlock;
