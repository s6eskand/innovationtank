import React, { Component } from 'react';

export default class GoFundMe extends Component {
	render() {
		return (
			<div className="container section" id="gofundme">
				<h1 className="section_title">Donations</h1>
				{/* <hr className="section_bar" /> */}
				<div className="section_body">
					If you would like to support our initiative, please visit our fundraising campaign
					<div style={{ width: '160px', height: '50px', margin: '10px auto' }}>
						<iframe
							style={{ width: '160px', height: '50px', margin: '0 auto' }}
							src="https://www.gofundme.com/f/3dprinted-mask-straps-amp-more-for-hospital-staff/widget/small"
						/>
					</div>
				</div>
			</div>
		);
	}
}
