'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(1)

const handleAccordion = (key: any) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}
	return (
		<>
			<div className="mobile-header mobile-haeder1 d-block d-lg-none">
				<div className="container-fluid">
					<div className="col-12">
						<div className="mobile-header-elements">
							<div className="mobile-logo">
								<Link href="//"><img src="/assets/img/logo/tnp.png" alt="" /></Link>
							</div>
							<div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
								<i className="fa-solid fa-bars-staggered" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`mobile-sidebar mobile-sidebar1 ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
				<div className="logosicon-area">
					<div className="logos">
						<img src="/assets/img/logo/tnp.png" alt="" />
					</div>
					<div className="menu-close" onClick={handleMobileMenu}>
						<i className="fa-solid fa-xmark" />
					</div>
				</div>
				<div className="mobile-nav mobile-nav1">
					<ul className="mobile-nav-list nav-list1">
						<li className="has-sub hash-has-sub">
							<Link href="/#" className="hash-nav">Home </Link>
						</li>
						<li className="hash-has-sub"><Link href="/about" className="hash-nav">About Us</Link></li>
						<li className="has-sub hash-has-sub">
							<Link href="/speakers" className="hash-nav">Founders</Link>
						</li>
						<li className="has-sub hash-has-sub">
							<Link href="/memories" className="hash-nav">Gallery</Link>
							
						</li>
						
						<li className="hash-has-sub"><Link href="/contact" className="hash-nav">Contact Us</Link></li>
						
					</ul>

					<div className="allmobilesection">
						<Link href="/contact" className="vl-btn1">Contact Now</Link>
						<div className="single-footer">
							<h3>Contact Info</h3>
							<div className="footer1-contact-info">
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-phone-volume" /></span>
									</div>
									<div className="contact-info-text">
										<Link href="//tel:+919466814544">+91-94668-14544</Link>
									</div>
								</div>
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-envelope" /></span>
									</div>
									<div className="contact-info-text">
										<Link href="//mailto:in@thenavodianplatform.in">in@thenavodianplatform.in</Link>
									</div>
								</div>
								<div className="single-footer">
									<h3>Our Location</h3>
									<div className="contact-info-single">
										<div className="contact-info-icon">
											<span><i className="fa-solid fa-location-dot" /></span>
										</div>
										<div className="contact-info-text">
											<Link href="//mailto:in@thenavodianplatform.in">Chandigarh</Link>
										</div>
									</div>
								</div>
								<div className="single-footer">
									<h3>Social Links</h3>
									<div className="social-links-mobile-menu">
										<ul>
											<li>
												<Link href="/https://www.youtube.com/@THENAVODIANPLATFORM"><i className="fa-brands fa-youtube" /></Link>
											</li>
											<li>
												<Link href="/https://www.instagram.com/thenavodianplatform/"><i className="fa-brands fa-instagram" /></Link>
											</li>
										</ul>
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
