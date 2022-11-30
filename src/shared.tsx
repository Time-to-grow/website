import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const SectionMarkDown: Object = {
    a: ({ ...props }: any) => <Link target="_blank" size="large" sx={{ my: 2 }} variant="outlined" {...props} />,
    p: ({ ...props }: any) => <Typography sx={{ mx: { md: 4 }, lineHeight: 1.75, maxWidth: { md: 600 } }} align="justify" variant=" body1" textAlign="center" {...props} />
};

// consistent image type
export type Image = {
    fields: {
        file: {
            url: string;
            title?: string;
        }
        title: string;
        description?: string;
    }
}