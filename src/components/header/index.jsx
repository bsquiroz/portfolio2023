import "./styles.css";

import { colorsPrimary } from "../../constants";
import { useHeader } from "./useHeader";
import { Skills } from "../skills";

export const Header = () => {
    const { handleColorPrincipal } = useHeader();

    return (
        <div className="section header">
            <div className="header__top">
                <div className="header__img">
                    <img src="/me.jpg" alt="brayan" />
                </div>
                <div className="header__color-change">
                    <div className="item"></div>
                    <ul className="box_color">
                        {colorsPrimary.map((color, i) => (
                            <li
                                key={i}
                                className="box_color-item"
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorPrincipal(color)}
                            ></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="header__botton">
                <h2>
                    Stiven Quiroz{" "}
                    <a download={""} href="/cv.pdf">
                        <i className="bx bx-download"></i>
                    </a>
                </h2>
                <ul>
                    <li>Colombia</li>
                    <li>medellin</li>
                    <li>23 años</li>
                    <li>React developer</li>
                    <li>A veces deportista</li>
                </ul>
            </div>
            <Skills />
        </div>
    );
};
