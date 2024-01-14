import { useState, JSX } from "react";

import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";
import type { SystemStyleObject, Theme } from "@mui/system";
import { useQuery } from "@tanstack/react-query";

import { Functions } from "@/functions";

type LoadingImageProps = {
    src: string;
    alt: string;
    skeletonheight?: number | string;
    sx?: SystemStyleObject<Theme>;
    width?: number | string;
    id?: string;
};

export const LoadingImage = (props: LoadingImageProps): JSX.Element => {
    const { src, skeletonheight, sx } = props;
    const { imageSrc } = new Functions();
    const [load, setLoad] = useState<boolean>(true);

    const loadSrc = (): string => imageSrc({ setLoad, src });
    useQuery([src], loadSrc);

    return (
        <>
            {load ? (
                <Skeleton
                    animation={false}
                    sx={sx}
                    variant="rectangular"
                    {...props}
                    height={skeletonheight}
                />
            ) : (
                <CardMedia sx={sx} component="img" loading="lazy" {...props} />
            )}
        </>
    );
};

export default LoadingImage;
