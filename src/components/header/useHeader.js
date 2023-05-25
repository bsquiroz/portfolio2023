import { useEffect } from "react";

export const useHeader = () => {
    useEffect(() => {
        const color = localStorage.getItem("color-primary");
        const colorShadow = localStorage.getItem("color-shadow");

        if (color) {
            document.documentElement.style.setProperty(
                "--color-primary",
                color
            );
        }

        if (colorShadow) {
            document.documentElement.style.setProperty(
                "--color-shadow",
                colorShadow
            );
        }
    }, []);

    const handleColorPrincipal = (color) => {
        document.documentElement.style.setProperty("--color-primary", color);
        document.documentElement.style.setProperty(
            "--color-shadow",
            `${color}50`
        );
        localStorage.setItem("color-primary", color);
        localStorage.setItem("color-shadow", `${color}50`);
    };

    return {
        handleColorPrincipal,
    };
};
