import { useTranslation } from "react-i18next";
import { Separator } from "../separator";
import "./styles.css";

export const Social = () => {
	const { t } = useTranslation()
	return (
		<div className="elementScrollReveal">
			<div className="section social">
				<h2>{t('social.title')}</h2>

				<ul className="socials">
					<li>
						<a
							href="https://github.com/bsquiroz"
							target="_blank"
							rel="noreferrer"
							aria-label="icon github for bsquiroz"
						>
							<i className="bx bx-tada-hover bxl-github"></i>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/bsmq/"
							target="_blank"
							rel="noreferrer"
							aria-label="icon linkedin for bsquiroz"

						>
							<i className="bx bx-tada-hover bxl-linkedin"></i>
						</a>
					</li>
					<li>
						<a
							href="https://www.youtube.com/channel/UCFjCKMkah0p-5790yE8Cz6Q"
							target="_blank"
							rel="noreferrer"
							aria-label="icon youtube for bsquiroz"

						>
							<i className="bx bx-tada-hover bxl-youtube"></i>
						</a>
					</li>
				</ul>
			</div>
			<Separator />
		</div>
	);
};
