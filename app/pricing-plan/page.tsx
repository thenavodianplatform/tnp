
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PricingPlan() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg16.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-9 m-auto">
									<div className="heading1 text-center">
										<h1>Pricing Plan</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Pricing Plan</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== PRICING AREA STARTS =======*/}
					<div className="pricing-lan-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>ticket pricing</h5>
										<div className="space18" />
										<h2>Event Pass &amp; Tickets</h2>
									</div>
								</div>
							</div>
							<div className="row justify-content-center">
								
								<div className="col-lg-4 col-md-6">
									<div className="pricing-boxarea">
										<h5>Performer</h5>
										<div className="space20" />
										<h2>₹359 <span>/One Person</span></h2>
										<div className="space8" />
										<ul>
											<li><img src="/assets/img/icons/check2.svg" alt="" />One Day Ticket</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Refreshment Available</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />30 March 2025</li>
											
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<Link href="https://payments.thenavodianplatform.in/" className="vl-btn1">buy a ticket</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="pricing-boxarea">
										<h5>Audience</h5>
										<div className="space20" />
										<h2>₹159 <span>/One Person</span></h2>
										<div className="space8" />
										<ul>
											<li><img src="/assets/img/icons/check2.svg" alt="" />One Day Ticket</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Refreshment Available</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />30 March 2025</li>
											
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<Link href="https://payments.thenavodianplatform.in/" className="vl-btn1">buy a ticket</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== PRICING AREA ENDS =======*/}
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
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 March 2025 - 12pm to 5pm</Link>
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
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 March 2025 - 12pm to 5pm</Link>
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
