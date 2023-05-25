import { Separator } from "../separator";
import "./styles.css";

export const Social = () => {
    return (
        <div className="elementScrollReveal">
            <div className="section social">
                <h2>Aqui me pueden encontrar</h2>

                <ul className="socials">
                    <li>
                        <a
                            href="https://github.com/bsqmAcademlo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bx bx-tada-hover bxl-github"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/stiven-quiroz-8841b1184/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bx bx-tada-hover bxl-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <Separator />
        </div>
    );
};
