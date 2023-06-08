import { Separator } from "../separator";
import { Works } from "./components/works";

import "./styles.css";

export const Jobs = () => {
	return (
		<div className="elementScrollReveal">
			<div className="section jobs">
				<h2>Mis colaboraciones</h2>
			</div>
			<Works />
			<Separator />
		</div>
	);
};
