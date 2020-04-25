import React, { Component } from 'react';
const items = [ { id: 'earpiece', name: 'Ear Piece' } ];
export default class Request extends Component {
	render() {
		return (
			<div class="ui form" style={{ minHeight: '100vh' }}>
				<h2 class="ui header" style={{ marginTop: '20px' }}>
					<img class="ui image" src={require('../../media/logonobg.png')} />
					<div class="content">Innovation Tank</div>
				</h2>

				<div class="grouped fields">
					<div class="field">
						<label> Name</label>
						<input type="text" name="name" />
					</div>
					<div class="field">
						<label>Contact</label>
						<input type="text" name="contact" />
					</div>
				</div>
				<h3 class="ui header">
					Select your Item
					<div class="sub header">
						Please select the item you would like to send a request for and we will contact you about it's
						availability
					</div>
				</h3>
				<div class="grouped fields">
					{items.map((item) => {
						return (
							<div class="field" key={item.id}>
								<div class="ui radio checkbox">
									<input type="radio" name="item-request" tabindex="0" />
									<label>{item.name}</label>
								</div>
							</div>
						);
					})}
					<div class="field">
						<label>Would you like to request something special instead?</label>
						<input type="text" name="invtank-spcrq" placeholder="Special Request?" />
					</div>
					<button class="ui button" type="submit">
						Submit
					</button>
				</div>
			</div>
		);
	}
}
