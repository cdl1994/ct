import React from 'react';
import { CPBody } from './components/CPBody';
import 'react-select/dist/react-select.css';
import '../css/CPBody.css';
import Header from '../header/header.js';
import Footer from '../footer.js';
import axios from 'axios';
import ReactLoading from 'react-loading';

class Designer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            header : null,
            footer : null,
        };
	}

	componentWillMount(){
        this.axiosRequest();
    }

	axiosRequest(){
        let address;
        var suffix = "";
        if (process.env.NODE_ENV === 'production') {
            address = window.location.host;
        }
        else {
            address = "52.53.152.61:8080";
            suffix = "&store_id=1";
        }
        axios({
            method:"get",
            url:"http://" + address + "/index.php?route=common/cp_header/api" + suffix,
        })
        .then((response)=> {
            this.setState({header: response.data});
        })
        .catch((error)=>{
            console.log(error);
        });
        axios({
            method:"get",
            url:"http://" + address + "/index.php?route=common/cp_footer/api" + suffix,
        })
        .then((response)=> {
            this.setState({footer: response.data});
        })
        .catch((error)=>{
            console.log(error);
        });
    }

	render() {
		var header = this.state.header == null ? <ReactLoading type="bubbles" color="#444" /> : <Header data={this.state.header} />;
		var footer = this.state.footer == null ? <ReactLoading type="bubbles" color="#444" /> : <Footer data={this.state.footer} />;
		var cpbodyStyle = {
			paddingTop: "160px",
		};
		var footerStyle = {
			paddingTop: "20px",
		};
		return (
			<div>
			{header}
			<div style={cpbodyStyle}><CPBody /></div>
			<div style={footerStyle}>{footer}</div>
			</div>
		);
	}
}

export default Designer;