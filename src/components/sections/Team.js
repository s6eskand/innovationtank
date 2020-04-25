import React, { Component } from 'react';
const team = [
	{
		name: 'Tank',
		href: 'https://cdn.discordapp.com/attachments/699280748192071760/700428424359051274/DSF1459croped.jpg',
		description: 'Organizer, Maker'
	},
	{
		name: 'Jenny Quach',
		href: 'https://cdn.discordapp.com/attachments/699280748192071760/700425511926759504/image0.png',
		description: 'Organizer'
	},
	{
		name: 'Sam Eskandar',
		href: 'https://sam-eskandar.herokuapp.com/static/images/profile_pic.21be18cd3f8d.png',
		description: 'Development'
	},
	{ name: 'Farhan Mohammed', href: 'https://picsum.photos/400', description: 'Development' },
	{
		name: 'Christopher Chang',
		href:
			'https://cdn.discordapp.com/attachments/699280748192071760/700428348471378031/IMG_20200413_010327_496.jpg',
		href: 'https://picsum.photos/400',
		description: 'Maker'
	},
	{
		name: 'Yvonne Chung',
		href: 'https://cdn.discordapp.com/attachments/699280748192071760/701618926525612083/image0.jpg',
		description: 'Design'
	}
];
export default class Team extends Component {
	render() {
		return (
			<div className=" section" id="teampage">
				<h1 className="section_title">Meet The Team!</h1>
				<hr className="section_bar" />
				<div className="section_body">
					<div className="team_con">
						{team.map(({ href, name, description }) => {
							return (
								<div className="team_member">
									<div className="ui fluid card" style={{ height: '100%' }}>
										<div class="team_member-img image" style={{ flex: '3 0 auto' }}>
											<img src={href} />
										</div>
										<div class="team_member-name content" style={{ flex: '1' }}>
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
