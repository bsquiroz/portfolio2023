import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = () => {
    useEffect(() => {
        const scrollReveal = ScrollReveal();
        scrollReveal.reveal(".elementScrollReveal", {
            delay: 200,
            distance: "150%",
            origin: "bottom",
        });
    }, []);
};
