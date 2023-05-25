import { skills } from "../../constants";
import { Separator } from "../separator";
import "./styles.css";

export const Skills = () => {
    return (
        <>
            <ul className="skills">
                {skills.map(({ id, name, icon }) => (
                    <li className="skill" key={id}>
                        <div
                            className="skillBanner"
                            style={{ backgroundColor: "var(--color-primary)" }}
                        ></div>
                        <p>
                            {name} {icon}
                        </p>
                    </li>
                ))}
            </ul>
            <Separator />
        </>
    );
};
