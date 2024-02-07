import { useEffect, useState } from "react";

export const useImageSrc = (src: string) => {
    const [load, setLoad] = useState<boolean>(true);
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

    return { load };
};

export default useImageSrc;