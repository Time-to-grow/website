import React, { JSX, useRef, useState, useEffect, useCallback } from "react";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { useOnScroll, useImageSrc } from "@/hooks";

type ImageProps = {
    src: string;
    height: number | string | { [key: string]: string | number };
    children?: React.ReactNode;
    speed: number;
    clamp?: boolean;
};

export const ParallaxImage = (props: ImageProps): JSX.Element => {
    const { src, height, children, speed, clamp } = props;
    const box = useRef<HTMLDivElement>(null);
    const img = useRef<HTMLImageElement>(null);
    const winHeight = window.innerHeight || 0;
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [load, setLoad] = useState<boolean>(true);

    const handleUseOnScroll = useCallback(
        (winHeight: number, scrollY?: number) => {
            scrollY = scrollY || window.scrollY;
            if (box.current && img.current) {
                const boxRect = box.current.getBoundingClientRect();
                const winBottom = scrollY + winHeight;
                const boxTop = boxRect.top + scrollY;
                const boxBottom = boxRect.bottom + scrollY;
                const boxHeight = boxRect.height;
                const pct =
                    (clampVal(winBottom, boxTop, boxBottom + winHeight) -
                        boxTop) /
                    (boxHeight + winHeight);

                const imgHeight = img.current.offsetHeight;

                if (imgHeight >= boxHeight) {
                    const diff = imgHeight - boxHeight;
                    const deltaY =
                        (0 - diff - diff * speed) * 0.5 + diff * pct * speed;

                    if (clamp) {
                        setScrollPosition(clampVal(deltaY, -diff, 0));
                    } else {
                        setScrollPosition(deltaY);
                    }
                }
            }
        },
        [clamp, speed]
    );

    useImageSrc(setLoad, src);

    useEffect(() => {
        window.addEventListener("resize", () => {
            handleUseOnScroll(winHeight);
        });
        handleUseOnScroll(winHeight);
    }, [winHeight, speed, clamp, load, src, handleUseOnScroll]);

    useOnScroll((scrollY, winHeight) => {
        handleUseOnScroll(winHeight, scrollY);
    });

    const image = {
        transform: `translate(0, ${scrollPosition}px)`,
        position: "relative",
        backgroundColor: "rgba(0, 0, 0, 0.4))",
        width: "100%",
        height: "auto",
        m: 0,
        p: 0,
        zIndex: -1,
    };

    return (
        <Box
            {...props}
            ref={box}
            sx={{
                position: "relative",
                width: "100vw",
                p: 0,
                height,
                background:
                    "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
            }}>
            {!load ? (
                <CardMedia
                    id="3d-img"
                    ref={img}
                    component="img"
                    src={src}
                    alt="image"
                    sx={image}
                />
            ) : (
                <Skeleton
                    id="img-skeleton"
                    variant="rectangular"
                    width="100%"
                    height="100%"
                />
            )}
            <Stack
                position="absolute"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                {children}
            </Stack>
        </Box>
    );
};

const clampVal = (num: number, min: number, max: number): number => {
    return Math.max(min, Math.min(num, max));
};
