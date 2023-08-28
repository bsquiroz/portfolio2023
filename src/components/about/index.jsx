import { Separator } from "../separator";
import "./styles.css";

export const About = () => {
	return (
		<div className="elementScrollReveal">
			<div className="section about">
				<h2>Sobre mí</h2>

				<p>
					Cuando no estoy programando, lo más probable es que esté
					trotando, comiendo o durmiendo, pero, por lo general,
					siempre estoy programando.
					<br />
					Me gustan los retos, por ejemplo, programar, trotar, comer y
					dormir el mismo día. 😅
				</p>
			</div>
			<Separator />
		</div>
	);
};
