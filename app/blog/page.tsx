

import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg13.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center">
										<h1>Our Blog</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Our Blog</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== BLOG AREA STARTS =======*/}
					<div className="bloginner-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
									<div className="blog4-boxarea">
										<div className="img1">
											<img src="/assets/img/all-images/blog/blog-img4.png" alt="" />
										</div>
										<div className="content-area">
											<ul>
												<li>
													<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
												</li>
												<li>
													<Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Beverly</Link>
												</li>
											</ul>
											<div className="space20" />
											<Link href="/blog-single">Save soil, save world Projects in 2020</Link>
											<div className="space24" />
											<Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
											<div className="arrow">
												<Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
									<div className="blog4-boxarea">
										<div className="img1">
											<img src="/assets/img/all-images/blog/blog-img5.png" alt="" />
										</div>
										<div className="content-area">
											<ul>
												<li>
													<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
												</li>
												<li>
													<Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Gisselle</Link>
												</li>
											</ul>
											<div className="space20" />
											<Link href="/blog-single">Civil Litigation paper’s Of Conference</Link>
											<div className="space24" />
											<Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
											<div className="arrow">
												<Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
									<div className="blog4-boxarea">
										<div className="img1">
											<img src="/assets/img/all-images/blog/blog-img6.png" alt="" />
										</div>
										<div className="content-area">
											<ul>
												<li>
													<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
												</li>
												<li>
													<Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Mertie</Link>
												</li>
											</ul>
											<div className="space20" />
											<Link href="/blog-single">Greetings and Opening Event of health</Link>
											<div className="space24" />
											<Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
											<div className="arrow">
												<Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
									<div className="blog4-boxarea">
										<div className="img1">
											<img src="/assets/img/all-images/memory/memory-img7.png" alt="" />
										</div>
										<div className="content-area">
											<ul>
												<li>
													<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
												</li>
												<li>
													<Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Beverly</Link>
												</li>
											</ul>
											<div className="space20" />
											<Link href="/blog-single">Eventify 2024: Unlock the Future of Business</Link>
											<div className="space24" />
											<Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
											<div className="arrow">
												<Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
									<div className="blog4-boxarea">
										<div className="img1">
											<img src="/assets/img/all-images/memory/memory-img8.png" alt="" />
										</div>
										<div className="content-area">
											<ul>
												<li>
													<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
												</li>
												<li>
													<Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Gisselle</Link>
												</li>
											</ul>
											<div className="space20" />
											<Link href="/blog-single">Where Vision Meetup Connect: Eventify 2024</Link>
											<div className="space24" />
											<Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
											<div className="arrow">
												<Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
									<div className="blog4-boxarea">
										<div className="img1">
											<img src="/assets/img/all-images/memory/memory-img9.png" alt="" />
										</div>
										<div className="content-area">
											<ul>
												<li>
													<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
												</li>
												<li>
													<Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Mertie</Link>
												</li>
											</ul>
											<div className="space20" />
											<Link href="/blog-single">Fuel Your Business Growth at Eventify</Link>
											<div className="space24" />
											<Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
											<div className="arrow">
												<Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
									<div className="blog4-boxarea">
										<div className="img1">
											<img src="/assets/img/all-images/memory/memory-img4.png" alt="" />
										</div>
										<div className="content-area">
											<ul>
												<li>
													<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
												</li>
												<li>
													<Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Beverly</Link>
												</li>
											</ul>
											<div className="space20" />
											<Link href="/blog-single">Ignite Your Business Potential at Eventify</Link>
											<div className="space24" />
											<Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
											<div className="arrow">
												<Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
									<div className="blog4-boxarea">
										<div className="img1">
											<img src="/assets/img/all-images/memory/memory-img11.png" alt="" />
										</div>
										<div className="content-area">
											<ul>
												<li>
													<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
												</li>
												<li>
													<Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Gisselle</Link>
												</li>
											</ul>
											<div className="space20" />
											<Link href="/blog-single">Step Into the Future of Business with Eventify</Link>
											<div className="space24" />
											<Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
											<div className="arrow">
												<Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
									<div className="blog4-boxarea">
										<div className="img1">
											<img src="/assets/img/all-images/memory/memory-img6.png" alt="" />
										</div>
										<div className="content-area">
											<ul>
												<li>
													<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
												</li>
												<li>
													<Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Mertie</Link>
												</li>
											</ul>
											<div className="space20" />
											<Link href="/blog-single">Empowering Business Growth at Eventify</Link>
											<div className="space24" />
											<Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
											<div className="arrow">
												<Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="space30" />
								<div className="pagination-area">
									<nav aria-label="Page navigation example">
										<ul className="pagination">
											<li className="page-item">
												<Link className="page-link" href="/#" aria-label="Previous">
													<i className="fa-solid fa-angle-left" />
												</Link>
											</li>
											<li className="page-item"><Link className="page-link active" href="/#">1</Link></li>
											<li className="page-item"><Link className="page-link" href="/#">2</Link></li>
											<li className="page-item"><Link className="page-link" href="/#">...</Link></li>
											<li className="page-item"><Link className="page-link" href="/#">12</Link></li>
											<li className="page-item">
												<Link className="page-link" href="/#" aria-label="Next">
													<i className="fa-solid fa-angle-right" />
												</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
					{/*===== BLOG AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-block d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
										<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The UK</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CTA AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-none d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
										<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The UK</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}