import React from 'react';
import photo from '../../media/Completed_batch_test1.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';

class Products extends React.Component {
	render() {
		return (
			<div id="productpage" className="section" style={{ padding: '3vw', textAlign: 'center' }}>
				<h1 className="section_title">Our Product</h1>
				{/* <hr className="section_bar" /> */}
				<div className="row" style={{ paddingTop: '3vw', fontFamily: 'Raleway' }}>
					<div className="col-4">
						<img style={{ borderRadius: '50%', borderTop: '50%', width: '50%' }} src={photo} alt="" />
					</div>
					<div>
						<FaArrowRight style={{ margin: '-3vw', marginTop: '5vw', fontSize: '3vw' }} />
					</div>
					<div className="col-4">
						<img
							style={{ borderRadius: '50%', borderTop: '50%', width: '50%' }}
							src="https://cdn.discordapp.com/attachments/699009984943358062/699054361070010499/image1.jpg"
							alt=""
						/>
					</div>
					<div>
						<MdAdd style={{ margin: '-3vw', marginTop: '5vw', fontSize: '4vw' }} />
					</div>
					<div className="col-4">
						<img
							style={{ borderRadius: '50%', borderTop: '50%', width: '50%' }}
							src="https://cdn.discordapp.com/attachments/699009984943358062/699010035510018178/92673064_873047756436114_8674595071783337984_n.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="col-12">
					<div className="section_body">
						Face masks provide essential protection for our frontline workers during the COVID-19 crisis,
						but wearing them all day can lead to painful pressure on the ears. These 3D-printed Ear Savers
						effectively reduce pressure and skin breakdown from the masks, preventing pain and discomfort.<br />
						<br />
						We are working to provide Ear Savers to local frontline staff <strong>for free!</strong> Any
						frontline worker is welcome to submit a request and we will do our best to get them to you as
						soon as possible.
					</div>
				</div>
			</div>
		);
	}
}

export default Products;
