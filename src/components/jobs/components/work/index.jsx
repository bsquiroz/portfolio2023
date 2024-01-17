import "./styles.css";

// eslint-disable-next-line react/prop-types
export const Work  = ({ urlImg, name, url, video }) => {
	return video ? (
		<div className="work__img">
			<div className="work__img__link">
				<a href={video} target="_blank" rel="noreferrer"  aria-label="icon video youtube about project">
					<i className="bx bxl-youtube"></i>
				</a>
				<a href={url} target="_blank" rel="noreferrer" aria-label="icon link project">
					<i className="bx bx-link-external"></i>
				</a>
			</div>

			<img src={urlImg} alt={name} />
		</div>
	) : (
			<a href={url} target="_blank" rel="noreferrer" aria-label="icon link project">
			<div className="work__img">
				<img src={urlImg} alt={name} />
			</div>
		</a>
	);
};
