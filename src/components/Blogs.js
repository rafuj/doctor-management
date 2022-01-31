import React from "react";
import { Button } from "react-bootstrap";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import blog__data from "../data/blog__data.js";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const Blogs = () => {
	return (
		<Section className="pt-120 pb-120 overflow-hidden">
			<SectionHeader
				center
				title="News & Blogs"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Navigation]}
				className="blogSlider"
				breakpoints={{
					520: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1200: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				}}
			>
				{blog__data &&
					blog__data.map((item, i) => (
						<SwiperSlide key={i}>
							<div className="post__item">
								<div className="post__item-thumb">
									<img src={item.img} alt="blog" />
								</div>
								<div className="post__item-content">
									<span className="date text--base">{item.date}</span>
									<h6 className="post__title">
										<a href={item.url}>{item.title}</a>
									</h6>
									<p className="post__item-txt">{item.text}</p>
									<div className="d-flex justify-content-between align-items-center">
										<span className="text--base">{item.doctor}</span>
										<Button
											className="btn-sm btn--base"
											href={item.url}
										>
											Read More
										</Button>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</Section>
	);
};

export default Blogs;
