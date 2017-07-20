import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class EnterEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", title: props.title, text: props.text};
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email : event.target.value});
    }

    render() {
        return (
            <Grid>
            <Row>
            <Col md={12} xs={12} className="h-first-cou">
                <h2 className="text-center margin-10" style={{fontSize: "2.4vmax"}}>{this.state.title}</h2>
                <h4 className="text-center color-white font-tradegothic-stdbold">{this.state.text}</h4>
                <br />
                <div id="column-left"><div id="formnewsletter">
                    <input type="text" className="input" ref="email" id="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Your Email Here"></input>
                    <button className="submitemail" id="submitNewsletter">
                        <img src="/image/data/default/misc/arrow-right.png" alt="right arrow" className="arrow-right-submit" />
                    </button>
                </div></div>
            </Col>
            </Row>
            </Grid>
        );
    }
}

export default EnterEmail;