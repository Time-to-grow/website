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
        <Container sx={{ backgroundColor: "background.default" }} maxWidth="xl">
            <SectionBody {...props} />
        </Container>
    );
};

export default Section;
