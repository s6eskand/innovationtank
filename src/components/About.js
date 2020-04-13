import React from 'react';

class About extends React.Component {
    render() {
        return(
            <div id="aboutpage" className="container" style={{padding: '50px', textAlign: 'center'}}>
                <h1 style={{fontSize: '3vw'}}>About Innovation Tank</h1>
                <hr style={{margin: '-0.5vh', borderTop: '2px solid #b4b4b4'}}/>
                <p style={{padding: '20px', fontSize: '1.1vw'}}>
                    Innovation Tank is a group formed by Tancred Yip to promote the sharing of ideas, projects, skills and events.
                    With the current situation of COVID-19, it has become a valuable resource to brainstorm ideas and projects to help fight against COVID-19.
                    Our current mission is to help frontline workers by providing the 3D printed parts they need to help them perform their work.
                </p>
            </div>
        )
    }
}

export default About;