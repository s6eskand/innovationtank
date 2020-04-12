import React from "react";
import { Link, animateScroll as scroll} from 'react-scroll';
import {FaHome} from 'react-icons/fa';

class Header extends React.Component {
    render() {
        return(
            <header>
                <div style={{position: 'relative', marginTop: '-60px'}}>
                    <video autoPlay loop width="100%" height="100%">
                        <source src="https://player.vimeo.com/external/398551000.sd.mp4?s=90117dc5c815668705b59b8f328a4b8920beab6c&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
                        Your browser does not support the video tag
                    </video>
                    <div style={{position: "absolute", left: '25%', top: '50%', transform: 'translateX(-15%) translateY(-50%)', textAlign: 'center'}}>
                        <h1 style={{fontSize: '3vw', color: '#f7f7f7', textShadow: '1px 1px 10px #000'}}><b>Innovation Tank</b>
                            <br/>
                            Sourcing Needs From Local Frontline Workers
                        </h1>
                    </div>

                </div>
            </header>
        )
    }
}

export default Header;