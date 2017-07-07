import React from 'react';
import ReactDOM from 'react-dom';

class CutBG extends React.Component {
	render(){		
		var cutStyle = {
			"background" : "url("+this.props.imageURL+")",
			"background-attachment" : "fixed",
			"height" : "150px",
			"border-top" : "1px solid #4c372e",
		}
		return (
			<div style={cutStyle}></div>
		);
	}
}

export default CutBG;