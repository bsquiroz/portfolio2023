import React, { useState, useEffect } from "react";
import { Toggle } from "../components/Toggle";

export const Christmas = () => {
	const [activate, setActivate] = useState(false);

	useEffect(() => {
		const activeScript = () => {
			let script = document.createElement("script");
			script.src = "https://app.embed.im/snow.js";
			script.id = "snowScript";
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		};

		const removeScript = () => {
			let script = document.getElementById("embedim--snow");
			if (script) {
				script.remove();
			}
		};

		if (activate) {
			activeScript();
		} else {
			removeScript();
		}
	}, [activate]);

	return (
		<Toggle
			active={activate}
			setActivate={setActivate}
			urlSong={"/songs/christmas.mp3"}
		/>
	);
};
