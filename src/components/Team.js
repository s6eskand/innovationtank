import React, { Component } from 'react';
const team = [
	{ name: 'Tank', href: 'https://picsum.photos/400', description: 'Tank' },
	{ name: 'Farhan Mohammed', href: 'https://picsum.photos/400', description: 'Web dev' },
	{ name: 'Farhan Mohammed', href: 'https://picsum.photos/400', description: 'Web dev' },
	{ name: 'Sam', href: 'https://picsum.photos/400', description: 'Web dev' }
];
export default class Team extends Component {
	render() {
		return (
			<div className="container section" id="contactpage">
				<h1 className="section_title">Team</h1>
				<hr className="section_bar" />
				<div className="section_body">
					<div className="team_con">
						{team.map(({ href, name, description }) => {
							return (
								<div className="team_member">
									<div className="ui fluid card" style={{ height: '100%' }}>
										<div class="image">
											<img src={href} />
										</div>
										<div class="team_member-name content">
											<a class="header">{name}</a>
											{description}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
