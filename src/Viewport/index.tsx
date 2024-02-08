import React, { JSX } from "react";

import Box from "@mui/material/Box";

import Footer from "./Footer";
import Header from "./Header";

type ViewportProps = {
    children: React.ReactNode;
};

const Viewport = ({ children }: ViewportProps): JSX.Element => {
    return (
        <>
            <Header />
            <Box id="website-body">{children}</Box>
            <Footer />
        </>
    );
};

export default Viewport;
