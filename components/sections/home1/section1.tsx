
import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section1() {
	return (
		<>

			<div className="hero1-section-area">
				<div className="bg1">
					<img src="/assets/img/bg/header-bg2.png" alt="" className="header-bg1" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="hero1-header heading1">
								<h5 data-aos="fade-left" data-aos-duration={800}><img src="/assets/img/logo/fav-logo.png" alt="" />SHOWCASE TALENT, INSPIRE CREATIVITY</h5>
								<div className="space16" />
								<h1 className="text-anime-style-3">
									THE NAVODIAN<br className="d-lg-block d-none" />
								</h1>
								<h1 className="text-anime-style-3">
									PLATFORM<br className="d-lg-block d-none" />
								</h1>
								<p data-aos="fade-left" data-aos-duration={900}>
									Showcase Your Art, Shape the Future At The, <br className="d-lg-block d-none" />
									
									Navodian Platform Where Talent Meets Innovation.
								</p>
								<h1 className="text-anime-style-3" style={{ visibility: "hidden" }}>
									THE <br className="d-lg-block d-none"  />
									
								</h1>
								<div className="space16" />
								
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
									<Link href="https://book.thenavodianplatform.in/" className="vl-btn1">Reserve My Seat</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="header-images">
								<div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
									<img src="/assets/img/all-images/hero/hero-img1.png" alt="" />
								</div>
								<div className="images-content-area" data-aos="fade-up" data-aos-duration={900}>
									<h3>THE NAVODIAN PLATFORM</h3>
									<div className="space12" />
									<Link href="/#">FEBRUARY 23, 2025</Link>
									<div className="space12" />
									<Link href="/#">CHANDIGARH</Link>
									<div className="space16" />
									<p>Join us for an inspiring day of creativity, innovation, and artistic expression at the Navodian Platform.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-1">
						<Countdown />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
