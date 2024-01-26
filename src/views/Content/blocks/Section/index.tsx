import { JSX } from "react";

import Center from "./Center";
import Column from "./Column";
import Left from "./Left";
import Right from "./Right";
import type { SectionTypes } from "@/types";

const SectionBody = (props: SectionTypes): JSX.Element => {
    const { contentEntry, id } = props;

    switch (contentEntry?.fields.direction) {
        case "Centre":
            return <Center contentEntry={contentEntry} id={id} />;
        case "Right":
            return <Right contentEntry={contentEntry} id={id} />;
        case "Left":
            return <Left contentEntry={contentEntry} id={id} />;
        case "Column":
            return <Column contentEntry={contentEntry} id={id} />;
        default:
            return <Center contentEntry={contentEntry} id={id} />;
    }
};

const Section = (props: SectionTypes): JSX.Element => {
    return <SectionBody {...props} />;
};

export default Section;
