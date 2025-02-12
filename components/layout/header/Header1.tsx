import Link from 'next/link'


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	return (
		<>
			<header>
			
				<div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/"><img src="/assets/img/logo/tnp.png" alt="" /></Link>
									</div>
									<div className="main-menu">
										<ul>
											<li>
												<Link href="/#">Home</Link>
												
											</li>
											<li><Link href="/about">About Us</Link></li>
											<li>
												<Link href="/speakers">Founders </Link>
												
											</li>
											
											
											<li>
												<Link href="/memories">Gallery </Link>
												
											</li>
											<li>
												<Link href="/contact">Contact Us</Link>
											</li>
											
											
										</ul>
									</div>
									<div className="btn-area">
										
										<ul>
											<li>
												<Link href="/https://www.youtube.com/@THENAVODIANPLATFORM"><i className="fa-brands fa-youtube" /></Link>
											</li>
											
											<li>
												<Link href="/https://www.instagram.com/thenavodianplatform/"><i className="fa-brands fa-instagram" /></Link>
											</li>
											
										</ul>
									</div>
									<div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
										<div className="tx-search-close tx-close" onClick={handleSearch}><i className="fa-solid fa-xmark" /></div>
										<div className="header-search-container">
											<form role="search" className="search-form">
												<input type="search" className="search-field" placeholder="Search …" name="s" />
												<button type="submit" className="search-submit"><img src="/assets/img/icons/search1.svg" alt="" /></button>
											</form>
										</div>
									</div>
									{isSearch && <div className="body-overlay active" onClick={handleSearch} />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
