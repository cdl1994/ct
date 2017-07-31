import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePageWithPopup from './homepage/homepage_with_popup.js';
import CategoryPage from './category/category_page.js';
import Designer from './designer/designer.js';

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
                    <div>
                        <Route path="/designer" component={Designer} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
