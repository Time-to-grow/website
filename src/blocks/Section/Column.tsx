import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import type { Content } from './SectionTypes';

export const Column = (props: Content) => {
    const { content } = props;

    return (
        <Box sx={{ p: 5 }}>
            <Typography align="center" gutterBottom variant="h2">
                    {content.fields.headline}
                </Typography>
            <Grid container>
                
            </Grid>
        </Box>
    )
}

export default Column;
