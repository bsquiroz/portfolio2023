import { useEffect, useState } from "react";

import "./styles.css";
export const ChangeTheme = () => {
    const [isThemeDark, setIsThemeDark] = useState(false);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("themeDark"))) {
            setIsThemeDark(true);
            document.body.classList.add("darkmode");
        } else {
            setIsThemeDark(false);
            document.body.classList.remove("darkmode");
        }
    }, []);

    useEffect(() => {
        if (isThemeDark) {
            document.body.classList.add("darkmode");
        } else {
            document.body.classList.remove("darkmode");
        }
    }, [isThemeDark]);

    const handleIsThemeDark = () => {
        setIsThemeDark(!isThemeDark);
        localStorage.setItem("themeDark", !isThemeDark);
    };

    return (
        <div className="iconTheme" onClick={() => handleIsThemeDark()}>
            {isThemeDark ? (
                <i className="bx bx-sun"></i>
            ) : (
                <i className="bx bx-moon"></i>
            )}
        </div>
    );
};
