import React from 'react';

class Contact extends React.Component {
	render() {
		return (
			<div id="contactpage">
				<footer
					className="mojFooter"
					style={{
						backgroundColor: '#000',
						color: 'white',
						textAlign: 'center',
						display: 'flex',
						justifyContent: 'center',
						flexWrap: 'wrap'
					}}
				>
					<div className="container">
						{/* <div style={{ padding: '10px 0 10px 0', textAlign: 'center' }}>
							<p> &copy; Copyright Innovation Tank 2020</p>
						</div> */}
						<div className="bottom-footer">
							<div className="col-md-12">
								<ul className="footer-nav">
									<li>TheInnovationTank@gmail.com</li>
									<li>
										<a href="">
											<i class="facebook f icon" />
										</a>
										<a href="">
											<i class="twitter icon" />
										</a>
										<a href="">
											<i class="instagram icon" />
										</a>
									</li>
									<li>
										<p> &copy; Copyright Innovation Tank 2020</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Contact;
