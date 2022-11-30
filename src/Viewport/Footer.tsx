import React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
    const date = new Date().getFullYear();

    return (
        <Stack component="footer" sx={{ py: 6 }} alignItems="center" justifyContent="center" spacing={2}>
            <Stack alignItems="center" spacing={2}>
                <Typography align="center" color="grayText" variant="body1">
                    {`All content © copyright  ${date} ${import.meta.env.VITE_APP_NAME}.`}
                </Typography >
                <Typography align="center" color="grayText" variant="body1">
                    All rights reserved.
                </Typography>
            </Stack>
        </Stack>
    )
}
export default Footer;

