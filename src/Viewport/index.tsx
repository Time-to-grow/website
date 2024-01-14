import React, { JSX } from "react";

import Footer from "./Footer";
import Header from "./Header";

type ViewportProps = {
    children: React.ReactNode;
};

const Viewport = ({ children }: ViewportProps): JSX.Element => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Viewport;
