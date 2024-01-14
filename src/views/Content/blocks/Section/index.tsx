import { JSX } from "react";

import Container from "@mui/material/Container";

import Center from "./Center";
import Column from "./Column";
import Left from "./Left";
import Right from "./Right";
import type { SectionTypes } from "@/types";

const SectionBody = (props: SectionTypes): JSX.Element => {
    const { contentEntry } = props;

    switch (contentEntry?.fields.direction) {
        case "center":
            return <Center contentEntry={contentEntry} />;
        case "right":
            return <Right contentEntry={contentEntry} />;
        case "left":
            return <Left contentEntry={contentEntry} />;
        case "column":
            return <Column contentEntry={contentEntry} />;
        default:
            return <Center contentEntry={contentEntry} />;
    }
};

const Section = (props: SectionTypes): JSX.Element => {
    return (
        <Container>
            <SectionBody {...props} />
        </Container>
    );
};

export default Section;
