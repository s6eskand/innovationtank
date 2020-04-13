import React from "react";
import photo from '../media/Completed_batch_test1.jpg';
import {FaArrowRight} from 'react-icons/fa';
import {MdAdd} from "react-icons/md";

class Products extends React.Component {
    render() {
        return(
            <div id="productpage" className="container" style={{padding: '3vw', textAlign: 'center'}}>
                <h1 style={{fontSize: '3vw'}}>Our Product</h1>
                <hr style={{margin: '-0.5vh', borderTop: '2px solid #b4b4b4'}}/>
                <div className="row" style={{paddingTop: '3vw'}}>
                    <div className="col-4">
                        <img style={{borderRadius: '50%', borderTop: '50%', width: '50%'}} src={photo} alt=""/>
                    </div>
                    <div>
                        <FaArrowRight style={{margin: '-3vw', marginTop: '5vw', fontSize: '3vw'}}/>
                    </div>
                    <div className="col-4">
                        <img style={{borderRadius: '50%', borderTop: '50%', width: '50%'}} src="https://cdn.discordapp.com/attachments/699009984943358062/699054361070010499/image1.jpg" alt=""/>
                    </div>
                    <div>
                        <MdAdd style={{margin: '-3vw', marginTop: '5vw', fontSize: '4vw'}}/>
                    </div>
                    <div className="col-4">
                        <img style={{borderRadius: '50%', borderTop: '50%', width: '50%'}} src="https://cdn.discordapp.com/attachments/699009984943358062/699010035510018178/92673064_873047756436114_8674595071783337984_n.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-12">
                    <p style={{fontSize: '1.1vw', padding: '20px'}}>
                        Hospitals are now requiring frontline workers to wear a mask throughout the entire day.
                        These “ear-saver” straps effectively prevent the worker’s ears from becoming raw and painful from the elastic loops.
                    </p>
                </div>
            </div>
        )
    }
}

export default Products;