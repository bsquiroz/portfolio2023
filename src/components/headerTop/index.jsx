import "./styles.css";
import { ChangeTheme } from "./components/changeTheme";
import { MusicBs } from "./components/musicBs";
import { Seasons } from "../seasons";

export const HeaderTop = () => {
	return (
		<div className="headerTop">
			<MusicBs />
			<div className="headerR">
				<ChangeTheme />
				<Seasons />
			</div>
		</div>
	);
};
