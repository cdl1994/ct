import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePageWithPopup from './HomePageWithPopup.js';
import CategoryPage from './category_page.js';

class Index extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <Route exact path="/" component={HomePageWithPopup} />
                    </div>
                    <div>
                        <Route path="/category/:name" component={CategoryPage} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
