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
};

export type THerobanner = {
    contentEntry: EntrySkeletonType<{
        headline: string;
        subheader: string;
        body: string;
        featureImage: Asset;
        ctaLabel: string;
        ctaLink: string;
    }>
};

type ContentTypes = {
    heroBanner: THerobanner;
    section: SectionTypes;
    tileBlock: TileBlockProps;
    sys: {
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

export type AllEntries = Record<string, React.FC<THerobanner & SectionTypes & TileBlockProps>>; 