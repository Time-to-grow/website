import { useEffect } from "react";

export const useImageSrc = (setLoad: (load: boolean) => void, src: string) => {
    const imageSrc = (setLoad: (load: boolean) => void, src: string): string => {
        setLoad(true);
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
            const loaded = setTimeout(() => {
                setLoad(false);
            }, 100);

            return () => { clearTimeout(loaded); };
        };
        return src;
    };

    useEffect(() => {
        imageSrc(setLoad, src);
    }, [setLoad, src]);
};

export default useImageSrc;