import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import ReactLoading from 'react-loading';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

class EnterEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            title: props.title, 
            text: props.text, 
            status: 0  //status: 0: input; 1: sending; 2: sent
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email : event.target.value});
    }

    submit(event) {
        let address;
        if (process.env.NODE_ENV === 'production') {
            address = window.location.origin;
        }
        else {
            address = "http://52.53.152.61:8080";
        }
        if (validateEmail(this.state.email)) {
            var tc = this;
            this.setState({status: 1});
            var formData = new FormData();
            formData.append("email", this.state.email);
            axios.post(address + '/index.php?route=mail/cp_rfnewsletter/sendmail', formData)
            .then(function (response) {
                tc.setState({status: 2});
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {
        var loading = this.state.status == 1 ? <span style={{width: "50px", height: "50px"}}><ReactLoading type="spokes" color="#444" /></span> : null;
        var inputBox =  <div><input type="text" className="input" ref="email" id="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Your Email Here"></input>
                        <button className="submitemail" id="submitNewsletter" onClick={this.submit}>
                            <img src="/image/catalog/default/misc/arrow-right.png" alt="right arrow" className="arrow-right-submit" />
                        </button></div>;
        var bar = this.state.status == 2 ? <div className="font-tradegothic-stdbold">Thank you for your submission.</div> : inputBox;
        return (
            <Grid>
            <Row>
            <Col md={12} xs={12} className="h-first-cou">
                <h2 className="text-center margin-10" style={{fontSize: "2.4vmax"}}>{this.state.title}</h2>
                <h4 className="text-center color-white font-tradegothic-stdbold">{this.state.text}</h4>
                <br />
                <div id="column-left"><div id="formnewsletter">
                    {bar}
                </div></div>
            </Col>
            </Row>
            </Grid>
        );
    }
}

export default EnterEmail;
