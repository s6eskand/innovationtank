import React from 'react';

class About extends React.Component {
	render() {
		return (
			<div id="aboutpage" className="section">
				<h1 className="section_title">About Innovation Tank</h1>
				{/* <hr className="section_bar" /> */}
				<div className="section_body">
					Innovation Tank is a group based in Toronto, Canada formed by Tancred Yip to promote the sharing of
					ideas, projects, and skills. With the current pandemic, it has become a valuable resource to
					brainstorm ideas and projects to help fight against COVID-19. Our current mission is to help
					frontline workers by providing the 3D-printed parts they need to help them perform their work.
				</div>
			</div>
		);
	}
}

export default About;
