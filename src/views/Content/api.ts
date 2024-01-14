import { QueryFunctionContext } from "@tanstack/react-query";
import { createClient, ContentfulClientApi, EntryCollection, EntrySkeletonType } from "contentful";

const createContentfulClient = (accessToken: string, host: string): ContentfulClientApi<undefined> => {
    return createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || "",
        environment: import.meta.env.VITE_ENVIRONMENT || "",
        accessToken,
        host,
    });
};

const client = createContentfulClient(
    import.meta.env.VITE_DELIVERY_TOKEN || "",
    "cdn.contentful.com"
);

const preview = createContentfulClient(
    import.meta.env.VITE_PREVIEW_TOKEN || "",
    "preview.contentful.com"
);

export const fetchContent = async ({ queryKey }: QueryFunctionContext<QueryKey>): Promise<EntryCollection<EntrySkeletonType, undefined, string>> => {
    const [name, type, slug, include] = queryKey;

    const contentfulClient = name === "content" ? client : preview;

    try {
        const resp = await contentfulClient.getEntries<EntrySkeletonType>({
            // eslint-disable-next-line camelcase
            content_type: type,
            "fields.pageSlug": slug,
            include: include || 3,
        });
        return resp;
    } catch (error) {
        console.error("Failed to fetch content:", error);
        throw error;
    }
};

type Include = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type QueryKey = [name: string, type: string, slug: string, include?: Include];