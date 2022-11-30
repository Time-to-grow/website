import type { Image } from '@/shared';

export type Content = {
    content: {
        fields: {
            ctaLabel: string;
            ctaSlug: string;
            body: string;
            image: Image;
            headline: string;
            direction: string;
        }
    }
}