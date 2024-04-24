import { useTranslation } from "react-i18next";
import { Separator } from "../separator";
import "./styles.css";

export const Games = () => {
	const { t } = useTranslation()
	return (
		<div className="elementScrollReveal">
			<div className="section games">
				<h2>
					{t('games.title')} {' '}
					<span>
						<i className="bx bx-game"></i>
					</span>
					<span>
						<i className="bx bx-ghost"></i>
					</span>
					<span>
						<i className="bx bx-ghost"></i>
					</span>
					<span>
						<i className="bx bx-ghost"></i>
					</span>
				</h2>

				<div>
					<p>
						{t('games.principal_paragraph')}
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
						<li>
							<a
								href="https://quizjsappbs.netlify.app/"
								rel="noreferrer"
								target="_blank"
							>
								<i className="bx bx-dice-4"></i> QuizJsApp
							</a>
						</li>
					</ul>
				</div>
			</div>
			<Separator />
		</div>
	);
};
