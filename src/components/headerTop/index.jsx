import "./styles.css";
import { ChangeTheme } from "./components/changeTheme";
import { MusicBs } from "./components/musicBs";
import { Seasons } from "../seasons";
import { ChangeLang } from "../changeLang";

export const HeaderTop = () => {
	const season = false
	return (
		<div className="headerTop">
			<MusicBs />
			<div className="headerR">
				<ChangeLang />
				<ChangeTheme />
				{season && <Seasons />}
			</div>
		</div>
	);
};
