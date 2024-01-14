import { JSX, Key } from "react";

import CheckIcon from "@mui/icons-material/Check";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import type { TileBlockProps } from "@/types";

const TileBlock = (props: TileBlockProps): JSX.Element => {
    const { contentEntry } = props;

    return (
        <Container sx={{ my: 6 }}>
            <Stack alignItems="center" spacing={2} sx={{ my: 2 }}>
                <Typography variant="h2">
                    {contentEntry.fields.headline}
                </Typography>
                <Typography
                    color="textSecondary"
                    align="center"
                    sx={{ my: 2, maxWidth: {xs: "100%", md: "68%" } }}>
                    {contentEntry.fields.description}
                </Typography>
            </Stack>
            <Grid
                spacing={2}
                container
                direction="row"
                justifyContent="center"
                alignItems="flexStart">
                {contentEntry.fields.tiles.map((tile, index) => (
                    <Grid spacing={2} xs={12} sm={4} key={index}>
                        <Card sx={{ p: 2 }}>
                            <Stack
                                sx={{ width: "100%" }}
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <Avatar
                                    sx={{
                                        backgroundColor: "primary.main",
                                        width: 75,
                                        height: 75,
                                    }}>
                                    <Box
                                        component="img"
                                        src={
                                            tile.fields.image.fields?.file
                                                ?.url as string
                                        }
                                        alt={tile.fields.title}
                                    />
                                </Avatar>
                                <Typography
                                    textTransform="uppercase"
                                    sx={{ mt: 2 }}
                                    variant="subtitle1">
                                    {tile.fields.title}
                                </Typography>
                            </Stack>
                            {Object(tile.fields.list).map(
                                (item: string, index: Key) => (
                                    <Stack
                                        sx={{ py: "0.25rem" }}
                                        direction="row"
                                        key={index}>
                                        <CheckIcon
                                            color="primary"
                                            sx={{ mr: 1 }}
                                        />
                                        <Typography color="textSecondary">
                                            {item}
                                        </Typography>
                                    </Stack>
                                )
                            )}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default TileBlock;
