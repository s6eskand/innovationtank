import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div id="contactpage">
                <footer className="mojFooter" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <div className="container">
                        <div style={{padding: '10px 0 10px 0', textAlign: 'center'}}>
                            <p> &copy; Copyright Innovation Tank 2020</p>
                        </div>
                        <div className="bottom-footer">
                            <div className="col-md-12">
                                <ul className="footer-nav">
                                    <li>theinnovationtank@gmail.com</li>
                                    <li>Innovation Tank</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Contact;