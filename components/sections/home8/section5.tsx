'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.owl-next',
		prevEl: '.owl-prev',
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView:4,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	}
}

export default function Section5() {
	return (
		<>

			<div className="team8-section-rea sp1" style={{ backgroundImage: 'url(assets/img/bg/header-bg20.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="heading11 space-margin60">
								<h5>15+ Event Speakers</h5>
								<div className="space18" />
								<h2 className="text-anime-style-3">Meet Our Speakers</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 team-slider-area8">
							<Swiper {...swiperOptions} className=" owl-carousel">
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img28.png" alt="" />
										<ul>
											<li>
												<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="/#" className="m-0"><i className="fa-brands fa-youtube" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Kendra Cremin</Link>
										<div className="space16" />
										<p>UX Deginer</p>
									</div>
								</SwiperSlide>
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img29.png" alt="" />
										<ul>
											<li>
												<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="/#" className="m-0"><i className="fa-brands fa-youtube" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Dennis Jacobson</Link>
										<div className="space16" />
										<p>CEO &amp; Founder</p>
									</div>
								</SwiperSlide>
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img30.png" alt="" />
										<ul>
											<li>
												<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="/#" className="m-0"><i className="fa-brands fa-youtube" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Patricia Wilkinson</Link>
										<div className="space16" />
										<p>HR Consultant</p>
									</div>
								</SwiperSlide>
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img31.png" alt="" />
										<ul>
											<li>
												<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="/#" className="m-0"><i className="fa-brands fa-youtube" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Kendra Cremin</Link>
										<div className="space16" />
										<p>UI/UX Designer</p>
									</div>
								</SwiperSlide>
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img32.png" alt="" />
										<ul>
											<li>
												<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="/#" className="m-0"><i className="fa-brands fa-youtube" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Dennis Jacobson</Link>
										<div className="space16" />
										<p>Finance Consultant</p>
									</div>
								</SwiperSlide>
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img28.png" alt="" />
										<ul>
											<li>
												<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="/#" className="m-0"><i className="fa-brands fa-youtube" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Patricia Wilkinson</Link>
										<div className="space16" />
										<p>HR Consultant</p>
									</div>
								</SwiperSlide>
							</Swiper>

<div className="owl-nav">
	<button type="button" role="presentation" className="owl-prev h1p">
		<i className="fa-solid fa-angle-left" />
	</button>
	<button type="button" role="presentation" className="owl-next h1n">
		<i className="fa-solid fa-angle-right" />
	</button>
</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
