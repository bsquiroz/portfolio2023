import React from "react";
import "./styles.css";

export const Toggle = ({ active, setActivate, urlSong }) => {
	return (
		<>
			<div
				className={active ? "toggle active" : "toggle"}
				onClick={() => setActivate(!active)}
			></div>
			{active && <audio src={urlSong} autoPlay loop></audio>}
		</>
	);
};
