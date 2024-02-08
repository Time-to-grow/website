import React from "react";

import { Asset, EntrySkeletonType } from "contentful";

export type SectionTypes = {
    contentEntry: EntrySkeletonType<{
        ctaLabel?: string;
        ctaSlug?: string;
        body: string;
        image: Asset;
        headline: string;
        sectionType: string;
        direction: string;
    }>
    id: string;
};

export type HerobannerTypes = {
    contentEntry: EntrySkeletonType<{
        headline: string;
        subheader: string;
        featureImage: Asset;
    }>
    id: string;
};

type ContentTypes = {
    heroBanner: HerobannerTypes;
    section: SectionTypes;
    quoteBlock: GenericContent;
    tileBlock: TileBlockProps;
    sys: {
        id: string;
        contentType: {
            sys: {
                id: string;
            };
        };
    };
}

export type ContentBlocks = EntrySkeletonType<{
    blocks: ContentTypes[];
}> | undefined;

export type ContentEntry = {
    contentEntry: ContentTypes;
    id: string;
}

export type THeader = EntrySkeletonType<{
    blocks: NavLinks[];
}> | undefined;

export type NavLinks = EntrySkeletonType<{
    name: string;
    pageSlug: string;
    media: Asset;
}>;

export type TileBlockProps = {
    contentEntry: EntrySkeletonType<{
        headline: string;
        description: string;
        tiles: EntrySkeletonType<{
            title: string;
            image: Asset;
            list: string
        }>[];
    }>
};

export type GenericContent = {
    contentEntry: {
        fields: { [key: string]: string };
    };
}

export type AllEntries = Record<string, React.FC<HerobannerTypes & SectionTypes & GenericContent & TileBlockProps>>; 