import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import axios from 'axios';

class CategoryPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <div>{this.props.match.params.name}</div>

            <div>WTF!!!</div>
            </div>
        );
    }
}

export default CategoryPage;