import React, { lazy, JSX } from "react";

import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchContent } from "./api";
import HeroBanner from "./blocks/HeroBanner";
import Section from "./blocks/Section";
import Contact from "./Contact";
import { Outline } from "@/components/Outline";
import type { ContentBlocks, AllEntries, ContentEntry } from "@/types";

const NotFound = lazy(() => import("@/views/NotFound"));

const blocks: AllEntries = {
    heroBanner: HeroBanner,
    section: Section,
};

const Content = (): JSX.Element => {
    let { type, slug } = useParams();
    [type, slug] = [type || "assembly", slug || "home"];

    const res = useQuery(["content", type, slug], fetchContent);
    const content = res.data?.items[0] as ContentBlocks;

    if (res.data?.items.length === 0) {
        return <NotFound />;
    }
    return (
        <>
            {!content && <Outline />}
            {content?.fields.blocks.map((block, index) => (
                <Box sx={{ overflowY: "hidden", my: 2 }} key={index}>
                    <ContentBlock
                        id={`${slug}-${block?.sys?.contentType.sys.id}-${block.sys?.id}`}
                        contentEntry={block}
                    />
                </Box>
            ))}
            <Contact />
        </>
    );
};

export default Content;

const ContentBlock = (
    props: ContentEntry
): Iterable<React.ReactNode> | JSX.Element | React.ReactNode => {
    const { contentEntry, id } = props;

    const name = contentEntry?.sys?.contentType.sys.id;

    if (!name) {
        return <></>;
    }
    return blocks[name]({ contentEntry, id } as any);
};
