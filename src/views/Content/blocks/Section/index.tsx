import { JSX } from "react";

import Box from "@mui/material/Box";

import Center from "./Center";
import Column from "./Column";
import Left from "./Left";
import Right from "./Right";
import type { SectionTypes } from "@/types";

const SectionBody = (props: SectionTypes): JSX.Element => {
    const { contentEntry } = props;

    switch (contentEntry?.fields.direction) {
        case "Centre":
            return <Center contentEntry={contentEntry} />;
        case "Right":
            return <Right contentEntry={contentEntry} />;
        case "Left":
            return <Left contentEntry={contentEntry} />;
        case "Column":
            return <Column contentEntry={contentEntry} />;
        default:
            return <Center contentEntry={contentEntry} />;
    }
};

const Section = (props: SectionTypes): JSX.Element => {
    return (
        <Box sx={{ backgroundColor: "background.default", py: 4 }}>
            <SectionBody {...props} />
        </Box>
    );
};

export default Section;
