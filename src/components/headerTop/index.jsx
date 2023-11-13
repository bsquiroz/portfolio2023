import "./styles.css";
import { ChangeTheme } from "./components/changeTheme";
import { MusicBs } from "./components/musicBs";

export const HeaderTop = () => {
	return (
		<div className="headerTop">
			<ChangeTheme />
			<MusicBs />
		</div>
	);
};
