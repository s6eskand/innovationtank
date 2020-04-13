import React, { Component } from 'react';

export default class GoFundMe extends Component {
	render() {
		return (
			<div className="container section" id="gofundme">
				<h1 className="section_title">GoFundMe</h1>
				<hr className="section_bar" />
				<div className="section_body">
					<iframe
						className="gofundme_iframe"
						src="https://www.gofundme.com/f/3dprinted-mask-straps-amp-more-for-hospital-staff/widget/large"
					/>
				</div>
			</div>
		);
	}
}
