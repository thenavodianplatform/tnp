
import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section9() {
	return (
		<>

			<div className="cta1-section-area">
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
										<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />11 May 2025
</Link>
									</li>
									<li className="m-0">
										<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Chandigarh</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
