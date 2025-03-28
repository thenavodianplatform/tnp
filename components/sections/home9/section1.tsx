import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section1() {
	return (
		<>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
			/>

			<div
				className="hero9-slider-area"
				style={{
					backgroundImage: 'url(assets/img/bg/header-bg2.gif)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center bottom'
				}}
			>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-7 text-center">
							<div className="hero8-header">
								<h5>
									<img src="/assets/img/logo/fav-logo.png" alt="" />
									SHOWCASE TALENT, INSPIRE CREATIVITY
								</h5>
								<div className="space16" />
								<h1 className="text-anime-style-3">THE NAVODIAN PLATFORM</h1>
								<div className="space32" />
								<div className="btn-area1">
									<Link href="/pricing-plan" className="vl-btn1">
										<span className="demo">Buy Tickets Now!</span>
									</Link>&nbsp;&nbsp;

									<Link href="/event" className="vl-btn1">
										<span className="demo">Event Reviews!</span>
									</Link>
									
									
								</div>
							</div>
						</div>
					</div>
					<br/><br/>
					<div className="row">
						<div className="col-lg-12">
							<div className="timer-bg-area">
								<div className="row">
									<div className="col-lg-7">
										<div className="timer-btn-area">
											<Countdown style={1} />
										</div>
									</div>
									<div className="col-lg-5">
										<div className="heading12">
											<h3>30 March 2025</h3>
											<div className="space16" />
											<p>
												<img src="/assets/img/icons/location1.svg" alt="" />
												The Flavour Lab, Main Market, &nbsp;&nbsp;&nbsp;&nbsp;Sector 9, Panchkula
											</p>
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
