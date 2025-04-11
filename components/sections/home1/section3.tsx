'use client'
import Link from 'next/link'
import { useState } from "react"

export default function Section3() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i: number) => {
		setIsTab(i)
	}
	return (
		<>
		
			<div className="event1-section-area sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="event-header heading2 space-margin60 text-center">
								<h5 data-aos="fade-left" data-aos-duration={800}>Event Schedule</h5>
								<div className="space16" />
								<h2 className="text-anime-style-3">Our Events Schedule Plan</h2>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div data-aos="fade-up" data-aos-duration={900}>
								<ul className="nav nav-pills space-margin60" id="pills-tab" role="tablist">


									<li className="nav-item" onClick={() => handleTab(1)}>
										<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
											<span className="day">Sunday</span>
											<span className="vl-flex">
												<span className="cal">11</span>
												<span className="date">MAY <br />
													2025</span>
											</span>
										</button>
									</li>

									
									
									
									
									<li className="nav-item" onClick={() => handleTab(5)}>
										<button className={isTab == 5 ? "nav-link active" : "nav-link"} id="pills-contact2-tab" data-bs-toggle="pill" data-bs-target="#pills-contact2" type="button" role="tab" aria-controls="pills-contact2" aria-selected="false">
											<span className="day">TBA</span>
											<span className="vl-flex">
												<span className="cal">--</span>
												<span className="date">TBA
													</span>

											</span>
										</button>
									</li>

									

								</ul>
							</div>
							<div className="tab-content" id="pills-tabContent">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={800}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/1.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 12:00
																PM -05:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> Chandigarh
</Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/#" className="head">The Navodian Platform: Event Date 11 MAY 2025
</Link>
													<div className="space16" />
													<p>Join us for an electrifying showcase of talent at The Navodian Platform. Experience a fusion of creativity, innovation, and inspiring performances on 11th May 2025.</p>
													<div className="space32" />

													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>

													
												</div>
											</div>
										</div>
									</div>
									
									
								</div>
								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-3">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img1.png" alt="" />
												</div>
											</div>
											<div className="col-lg-9">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 Your Pathway to
														Business Transformation</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img1.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 Your Pathway to
														Business Transformation</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img2.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 A Full-Day Journey
														the Future of Business</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img3.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 Charting the Course
														for Business Success</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact1-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img1.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innnovate 2025 Your Pathway to
														Business Transformation</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img2.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 A Full-Day Journey
														the Future of Business</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img3.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 Charting the Course
														for Business Success</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact2-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/tba.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 12:00
																PM -05:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> Chandigarh
															 </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/#" className="head">The Navodian Platform: Event Date TBA</Link>
													<div className="space16" />
													<p>Join us for an electrifying showcase of talent at The Navodian Platform. Experience a fusion of creativity, innovation, and inspiring performances! TBA</p>
													<div className="space32" />
													<div className="btn-area1">
														
													</div>
												</div>
											</div>
										</div>
									</div>
									
									
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
