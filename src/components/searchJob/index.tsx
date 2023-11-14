import React, { useState } from "react";
import "./styles.css";

export const SearchJob = () => {
	const [isShowModal, setIsShowModal] = useState(true);

	const styleContainerSearchJob = isShowModal
		? "container__searchJob"
		: "container__searchJob container__searchJob--hidden";

	const handleClick = () => {
		setIsShowModal(false);
	};

	return (
		<div className={styleContainerSearchJob}>
			<div className="searchJob">
				<i className="iconClose bx bx-x" onClick={handleClick}></i>
				<div className="overlayJob">
					<p>En busca de una empresa que me quiera adoptar</p>
				</div>
				<img src="/cat.gif" alt="" />
			</div>
		</div>
	);
};
