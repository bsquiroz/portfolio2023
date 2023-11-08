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

				<a
					className="linkCoverLetter"
					href="https://coverletterme.netlify.app"
					target="_blank"
				>
					<i class="bx bxs-pencil"></i>
					<span>Aquí me presento un poco mejor 🙊</span>
				</a>
			</div>
			<Separator />
		</div>
	);
};
