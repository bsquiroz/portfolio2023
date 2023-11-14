import { Separator } from "../separator";
import "./styles.css";

export const Games = () => {
	return (
		<div className="elementScrollReveal">
			<div className="section games">
				<h2>
					¿Juegas? <i className="bx bx-game"></i>{" "}
					<i className="bx bx-ghost"></i>
					<i className="bx bx-ghost"></i>
					<i className="bx bx-ghost"></i>
				</h2>

				<div>
					<p>
						Bueno, que no todo sea leer, por aquí tengo unos mini
						juegos que he creado, espero te diviertas.
					</p>

					<ul>
						<li>
							<a
								href="https://wordlebs.netlify.app/"
								rel="noreferrer"
								target="_blank"
							>
								<i className="bx bx-dice-1"></i> GuessWord
							</a>
						</li>
						<li>
							<a
								href="https://trikibs.netlify.app/"
								rel="noreferrer"
								target="_blank"
							>
								<i className="bx bx-dice-2"></i> Triki
							</a>
						</li>
						<li>
							<a
								href="https://memorygamebs.netlify.app/"
								rel="noreferrer"
								target="_blank"
							>
								<i className="bx bx-dice-3"></i> MemoryGame
							</a>
						</li>
					</ul>
				</div>
			</div>
			<Separator />
		</div>
	);
};
