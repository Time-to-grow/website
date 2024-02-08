import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const QuoteBlock = (props: {
    contentEntry: {
        fields: { body: string };
    };
}): JSX.Element => {
    const { contentEntry } = props;

    return (
        <Grid
            sx={{ height: { lg: "35vw", xs: 400 } }}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <Grid item>
                <Container>
                    <Typography variant="h3" align="center">
                        {contentEntry.fields.body}
                    </Typography>
                </Container>
            </Grid>
        </Grid>
    );
};

export default QuoteBlock;
