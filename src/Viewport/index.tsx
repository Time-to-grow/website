import React from 'react'; 

import Box from '@mui/material/Box'; 
import Container from '@mui/material/Container';

import Footer from './Footer';
import Header from './Header';

type ViewportProps = {
    children: React.ReactNode;
}

const Viewport = (props: ViewportProps) => {
    const { children } = props;

    return (
        <>
            <Header />
            <Container sx={{ minHeight: '70vh' }} maxWidth="xl">
                <Box sx={{ mx: { xs: '0.25rem', sm: '2.5rem' } }}>
                    {children}
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default Viewport