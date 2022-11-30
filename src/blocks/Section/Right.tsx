import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

import type { Content } from './SectionTypes';
import { SectionMarkDown } from '@/shared';

export const Right = (props: Content) => {
    const { content } = props;

    return (
        <Grid container direction="row-reverse" spacing={2} sx={{ py: 6 }}>
            <Grid item xs={12} sm={6} md={6}>
                {content.fields.image?.fields.file.url &&
                    <CardMedia
                        loading="lazy"
                        sx={{ width: "100%", height: 'auto' }}
                        component="img"
                        src={content.fields.image.fields.file.url}
                        alt={content.fields.image.fields.title}
                    />
                }
            </Grid>
            <Grid item xs={12} sm={6} >
                <Typography align="center" variant="h2" >
                    {content.fields.headline}
                </Typography>
            </Grid>
            <Container maxWidth="sm">
                <ReactMarkdown components={SectionMarkDown} >
                    {content.fields.body}
                </ReactMarkdown>
            </Container>
        </Grid >
    )
}
export default Right;