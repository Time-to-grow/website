import React, { lazy, JSX } from "react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchContent } from "./api";
import HeroBanner from "./blocks/HeroBanner";
import Section from "./blocks/Section";
import TileBlock from "./blocks/TileBlock";
import Contact from "./Contact";
import type { ContentBlocks, AllEntries, ContentEntry } from "@/types";

const NotFound = lazy(() => import("@/views/NotFound"));

const blocks: AllEntries = {
    heroBanner: HeroBanner,
    section: Section,
    tileBlock: TileBlock,
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
            {content?.fields.blocks.map((block, index) => (
                <ContentBlock key={index} contentEntry={block} />
            ))}
            <Contact />
        </>
    );
};

export default Content;

const ContentBlock = (
    props: ContentEntry
): Iterable<React.ReactNode> | JSX.Element | React.ReactNode => {
    const { contentEntry } = props;

    const name = contentEntry?.sys?.contentType.sys.id;
    if (!name) {
        return <></>;
    }
    return blocks[name]({ contentEntry } as any);
};
