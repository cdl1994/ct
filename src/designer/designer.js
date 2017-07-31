import React from 'react';
import { CPBody } from './components/CPBody';
import 'react-select/dist/react-select.css';
import '../css/CPBody.css';

class Designer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<CPBody />
		);
	}
}

export default Designer;