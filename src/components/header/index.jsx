import "./styles.css";

import { colorsPrimary } from "../../constants";
import { useHeader } from "./useHeader";
import { Skills } from "../skills";
import { useTranslation } from "react-i18next";

export const Header = () => {
	const { t } = useTranslation()
	const { handleColorPrincipal } = useHeader();

	const avaliableWork = false;

	return (
		<div className="elementScrollReveal section header">
			<div className="header__top">
				<div className="header__img">
					<div className="img__overlay"></div>
					<img src="/me.jpg" alt="brayan" />
				</div>
				<div className="header__color-change">
					<div className="item">
						<span>Hover</span>
						<img src="/imgMe.png" alt="imagen mia" />
					</div>
					<ul className="box_color">
						{colorsPrimary.map((color, i) => (
							<li
								key={i}
								className="box_color-item"
								style={{ backgroundColor: color }}
								onClick={() => handleColorPrincipal(color)}
							></li>
						))}
					</ul>
				</div>
			</div>
			<div className="header__botton">
				<h2>
					Stiven Quiroz{" "}
					<a download={""} href="/stivenQuiroz-cv.pdf" aria-label="icon download cv">
						<i className="bx bx-download"></i>
					</a>
					{avaliableWork && (
						<span className="header__talent-text">
							Disponible para trababar
						</span>
					)}
				</h2>
				<ul>
					<li>Fullstack developer JS | </li>
					<li>Colombia | </li>
					<li>Medellín | </li>
					<li>{t('header.age')} | </li>
					<li>{t('header.hobbie')}</li>
				</ul>
			</div>
			<Skills />
		</div>
	);
};
