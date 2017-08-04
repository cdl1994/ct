import React from 'react';
import ReactDOM from 'react-dom';

class CutBG extends React.Component {
	render(){		
		var cutStyle = {
			background : "url("+this.props.imageURL+")",
			backgroundAttachment : "fixed",
			height : "150px",
			borderTop : "1px solid #4c372e",
		}
		return (
			<div style={cutStyle}></div>
		);
	}
}

export default CutBG;