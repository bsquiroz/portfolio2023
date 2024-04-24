import { Separator } from "../separator";
import "./styles.css";

import { useTranslation } from 'react-i18next';

export const About = () => {
	const { t } = useTranslation()
	return (
		<div className="elementScrollReveal">
			<div className="section about">
				<h2>{t('about.title')}</h2>

				<p>
					{t('about.paragraph_1')}
					<br />
					{t('about.paragraph_2')}
				</p>

				<a
					className="linkCoverLetter"
					href="https://coverletterme.netlify.app"
					target="_blank"
					rel="noreferrer"
					aria-label="icon link for coverletter bsquiroz"
				>
					<i className="bx bx-link"></i>
					<span>{t('about.link_presentation')}</span>
				</a>
			</div>
			<Separator />
		</div>
	);
};
