import React from "react";

import "./styles.css";

export const Work = ({ urlImg, name, url }) => {
	return (
		<a href={url} target="_blank">
			<div className="work__img">
				<img src={urlImg} alt={name} />
			</div>
		</a>
	);
};
