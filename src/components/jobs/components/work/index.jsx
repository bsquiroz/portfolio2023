import React from "react";

import "./styles.css";

export const Work = ({ urlImg, name, url, video }) => {
	console.log(video);
	return video ? (
		<div className="work__img">
			<div className="work__img__link">
				<a href={video} target="_blank">
					<i class="bx bxl-youtube"></i>
				</a>
				<a href={url} target="_blank">
					<i class="bx bx-link-external"></i>
				</a>
			</div>

			<img src={urlImg} alt={name} />
		</div>
	) : (
		<a href={url} target="_blank">
			<div className="work__img">
				<img src={urlImg} alt={name} />
			</div>
		</a>
	);
};
