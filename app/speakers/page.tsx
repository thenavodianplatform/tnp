
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Speakers() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg6.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-5 m-auto">
									<div className="heading1 text-center">
										<h1>Our Founders</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Our Founders</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== TEAM AREA STARTS =======*/}
					<div className="team-sperkers-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/3.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">DEVIN SHAMBARWAL</Link>
											<div className="space16" />
											<p>FOUNDER</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/4.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">SIMRAN CHAWLA</Link>
											<div className="space16" />
											<p>CO-FOUNDER</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/2.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">RAJAT BHATIA</Link>
											<div className="space16" />
											<p>CHIEF MARKETING OFFICER</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/1.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">ABHISHEK RAJ</Link>
											<div className="space16" />
											<p>VIDEO EDITING MANAGER</p>
										</div>
									</div>
								</div>
								
								
								
								
							</div>
						</div>
					</div>
					{/*===== TEAM AREA ENDS =======*/}
					
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-none d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
										<Countdown />
											<div className="btn-area1">
												<Link href="https://book.thenavodianplatform.in" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />23 Feburary 2025 - 12pm to 5pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The Chandigarh</Link>
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
