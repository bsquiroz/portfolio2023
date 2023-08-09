import React from "react";
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Work } from "../work";

const data = [
	{
		id: 0,
		urlImg: "/images/img1.PNG",
		name: "image1",
		url: "https://academlostorev1.netlify.app/",
	},
	{
		id: 1,
		urlImg: "/images/img2.PNG",
		name: "image2",
		url: "https://etb.com/",
	},
	{
		id: 2,
		urlImg: "/images/img3.PNG",
		name: "image3",
		url: "https://gourmeatsapp.com/",
	},
	{
		id: 3,
		urlImg: "/images/img4.PNG",
		name: "image4",
		url: "https://bsquirozfrontendmentor.netlify.app/",
	},
	{
		id: 4,
		urlImg: "/images/img5.PNG",
		name: "image5",
		url: "https://menubsquiroz.netlify.app",
	},
];

export const Works = () => {
	return (
		<>
			<i class="bx bx-left-arrow-alt prevButton"></i>
			<i class="bx bx-right-arrow-alt nextButton"></i>
			<Swiper
				breakpoints={{
					400: {
						slidesPerView: 1,
					},
					600: {
						slidesPerView: 2,
					},
				}}
				modules={[Pagination, Navigation]}
				navigation={{
					nextEl: ".nextButton",
					prevEl: ".prevButton",
				}}
				spaceBetween={50}
				pagination={{ clickable: true, el: ".elPagination" }}
				className="swipper__work"
				loop={true}
			>
				{data.map(({ id, name, urlImg, url }) => (
					<SwiperSlide key={id} className="swipper__work--item">
						<Work urlImg={urlImg} name={name} url={url} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="elPagination"></div>
		</>
	);
};
