
import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section1() {
	return (
		<>

			<div className="hero9-slider-area" style={{ backgroundImage: 'url(assets/img/bg/header-bg2.gif)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center bottom' }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7">
							<div className="hero8-header">
								<h5><img src="/assets/img/logo/fav-logo.png" alt="" />SHOWCASE TALENT, INSPIRE CREATIVITY</h5>
								<div className="space16" />
								<h1 className="text-anime-style-3">THE NAVODIAN PLATFORM</h1>
								<div className="space32" />
								<div className="btn-area1">
									<Link href="https://book.thenavodianplatform.in" className="vl-btn1"><span className="demo">Buy Tickets Now!</span></Link>
									
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="img1">
								<img src="/assets/img/all-images/hero/hero-img1.png" alt="" />
							</div>
						</div>
					</div>
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
											<h3>23 February 2025</h3>
											<div className="space16" />
											<p><img src="/assets/img/icons/location1.svg" alt="" />Chandigarh</p>
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
