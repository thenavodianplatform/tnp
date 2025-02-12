import Link from 'next/link'


export default function Footer1() {
	return (
		<>
			<div className="footer1-sertion-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-logo-area">
								<img src="/assets/img/logo/tnp.png" alt="" />
								<div className="space16" />
								<p>We are dedicated to building a platform where artists, innovators, and creators come together to share ideas, inspire each other, and shape the future of creative expression</p>
								<div className="space24" />
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
						<div className="col-lg-2 col-md-6">
							<div className="link-content">
								<h3>Quick Links</h3>
								<ul>
									<li><Link href="/#">Home</Link></li>
									<li><Link href="/about">About Us</Link></li>
									<li><Link href="/speakers">Founders</Link></li>
									<li><Link href="/memories">Gallery</Link></li>
									<li><Link href="/contact">Contact Us</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="link-content2">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<Link href="/tel:+11234567890"><img src="/assets/img/icons/phn1.svg" alt="" />+91-94668-14544 </Link>
									</li>
									<li>
										<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Chandigarh</Link>
									</li>
									<li>
										<Link href="/mailto:tnp.assist@gmail.com"><img src="/assets/img/icons/mail1.svg" alt="" />tnp.assist@gmail.com</Link>
									</li>
									<li>
										<Link href="/#"> <img src="/assets/img/icons/world1.svg" alt="" />thenavodianplatform.in</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer-social-box">
								<h3>Our Recent Event Gallery</h3>
								<div className="space12" />
								<div className="row">
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/1.png" alt="" />
											<div className="icons">
												<Link href="/https://www.instagram.com/thenavodianplatform/"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/2.png" alt="" />
											<div className="icons">
												<Link href="/https://www.instagram.com/thenavodianplatform/"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/3.png" alt="" />
											<div className="icons">
												<Link href="/https://www.instagram.com/thenavodianplatform/"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/4.png" alt="" />
											<div className="icons">
												<Link href="/https://www.instagram.com/thenavodianplatform/"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/5.png" alt="" />
											<div className="icons">
												<Link href="/https://www.instagram.com/thenavodianplatform/"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/6.png" alt="" />
											<div className="icons">
												<Link href="/https://www.instagram.com/thenavodianplatform/"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space60" />
					<div className="row">
						<div className="col-lg-12">
							<div className="copyright">
								<p>© Copyright {new Date().getFullYear()} -The Navodian Platform. All Right Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
