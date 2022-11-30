import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

import type { Content } from './SectionTypes';
import { SectionMarkDown } from '@/shared';

export const Center = (props: Content) => {
    const { content } = props;

    const navigate = useNavigate();

    return (
        <>
            {content.fields.image?.fields.file.url &&
                <CardMedia
                    sx={{ width: '100%', height: 'auto' }}
                    component="img"
                    src={content.fields.image.fields.file.url}
                    alt={content.fields.image.fields.title}
                />
            }
            {content.fields.headline &&
                <Typography align="center" variant="h2" sx={{ pt: { xs: 2, md: 4 }, my: 2 }}>
                    {content.fields.headline}
                </Typography>
            }
            <Stack justifyContent="center" direction="column" alignItems="center" spacing={2} sx={{ pb: { xs: 2, md: 4 }, color: 'GrayText' }}>
                <ReactMarkdown components={SectionMarkDown} >
                    {content.fields.body}
                </ReactMarkdown>
                {content.fields.ctaLabel &&
                    <Button onClick={() => navigate(content.fields.ctaSlug)} variant="contained" sx={{ mt: 4, mb: 4 }}>
                        {content.fields.ctaLabel}
                    </Button>
                }
            </Stack>
        </>
    )
}

export default Center;