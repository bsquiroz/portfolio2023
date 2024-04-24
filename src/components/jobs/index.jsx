import { useTranslation } from "react-i18next";
import { Separator } from "../separator";
import { Works } from "./components/works";

import "./styles.css";

export const Jobs = () => {

	const { t } = useTranslation()
	return (
		<div className="elementScrollReveal">
			<div className="section jobs">
				<h2>{t('jobs.title')}</h2>
			</div>
			<Works />
			<Separator />
		</div>
	);
};
