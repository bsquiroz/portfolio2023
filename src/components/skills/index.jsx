import { skills } from "../../constants";
import { Separator } from "../separator";
import "./styles.css";

export const Skills = () => {
	return (
		<>
			<ul className="skills">
				{skills.map(({ id, name, icon }) => (
					<li className="skill" key={id}>
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
