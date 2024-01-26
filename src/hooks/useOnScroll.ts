import { useEffect, useRef } from "react";

export const useOnScroll = (onScroll: (scrollY: number, winHeight: number) => void) => {
    const _onScroll = useRef(onScroll);

    useEffect(() => {
        let animationId: number | null = null;
        let ticking = false;

        const onTick = () => {
            ticking = false;
            _onScroll.current(window.scrollY || 0, window.innerHeight || 0);
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                animationId = window.requestAnimationFrame(onTick);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);

            if (animationId !== null) {
                window.cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return _onScroll;
};

export default useOnScroll;