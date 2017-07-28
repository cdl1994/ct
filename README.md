# Custom Platform React App

This is the front-end part of custom platform application using React. This react application fetches data from backend in JSON format. Code is different for production and development versions.

## Install instruction for development

### What you need
* Node.js
* npm (package manager of Node.js)
* Babel support for your code editor (optional)

### Packages and plug-ins
There are plenty of plug-ins designed for React. Package information is automatically recorded in `package.json`. Use `npm install` first to install all required packages. If new package is needed, you can also use `npm install` command to get the package, then you can import the package in code.

### How to run development version of app
Run `npm start` in the directory.

### Config back-end server to avoid CORS during development
During development, front-end run in Node.js usually has a different domain name as the PHP based back-end. In this case, to avoid cross-origin resource sharing (CORS) in Ajax requests, Apache server for the back-end needs to be configured correctly to accept CORS requests. 

* Allow `GET` requests: Add `Header set Access-Control-Allow-Origin "*"` in the configuration file of your site to set a message in HTTP header;
* Allow `POST` requests: When meeting with a `POST` request, browsers like Google Chrome will not send the `POST` request directly. Instead, browsers would send a `OPTION` request with header only to server first in order to detect whether the server accepts CORS requests. If server returns correct message, then browser would send the true `POST` request. To handle `OPTION` requests correctly, you can create a blank PHP page and redirect all `OPTION` requests into this blank page in website configuration. As long as the server returns `200` response with correct header, browser will send true `POST` requests.

If you think the above method is too complicated, you can find some browser plugins to force the browser sending CORS requests.

### More informaion
This application originally created by [Create React App](https://github.com/facebookincubator/create-react-app), but we have executed `npm run eject`. If you want to know more about how React bundle works, you can check documents of [Webpack](https://webpack.github.io) and Create React App.

## Production version
To deploy this application in production, this project should be compiled and compress first. Run `npm run build`, and it will do everything for you. There will be a folder named `build`. All Javascript codes, frameworks, plug-ins and files will be automatically packed and minified into a single file in the `build\static\js` directory. In this case, production server will not need React framework nor Node.js anymore. Also, there are some conditional compilation to distinguish development and production environment using `process.env.NODE_ENV`.

## Platform switching
In development version, we use `&store_id=1` suffix in URL of Ajax requests to choose platform, in which `store_id` is the ID of store. In production, to avoid CORS requests, we will use the same domain name in front-end and back-end. Therefore, we use Javascript to get platform information directly. Conditional complication will choose according to development or production environment.

## React-Router
As a single page application (SPA), all paths inside of this application are handled in `index.js` using React-Router component. Therefore, in production environment, all paths that directly handled by React should be redirected to the same page.

## React Packages

* [react-bootstrap](https://react-bootstrap.github.io/) : bootstrap components for React
* [react-document-title](https://github.com/gaearon/react-document-title) : title
* [react-skylight](http://marcio.github.io/react-skylight/) : popup window
* [universal-cookie](https://www.npmjs.com/package/universal-cookie) 
* [axios](https://www.npmjs.com/package/axios) : Ajax request
* [react-loading](https://www.npmjs.com/package/react-loading) : loading gif
* [react-slick](https://github.com/akiran/react-slick) : implement carousel
* [react-columns](https://www.npmjs.com/package/react-columns)
* [react-router-dom](https://github.com/ReactTraining/react-router)

## Files

### ./public
  * `index.html`: main html file, used for importing CDN and CSS Files. Division named root is rendered by ReactJS.
  * `stylesheet-new.css`, `combined-styles.css`: Customized CSS file
  * `image/`: store all the images
  * `fonts/`: store all the fonts

### ./src

* `index.js`: 
  This is the main component rendering root division in `index.html`. It contains two parts, the first one is HomePageWithPopup(import from the corresponding JS file, named `homepage_with_popup.js`) and the second is CategoryPage component. We use React-Router to redirect to these two pages.

  * `homepage_with_popup.js`:   We use React-Skylight to build the popup window. The popup image link is fetched from JSON API, so we have to finish fetching data before we can update the link. This component contains the Popup window and Homepage component.

    * `homepage.js`: The homepage of customize platform is rendered by this component. Ajax requests are made by axios. The renderer will render homepage after fetching data from JSON. We have to make sure that the data is complete when rendering the page, otherwise it will fail and we show the loading image instead.

    * `carousel.js`, `category_carousel.js`, `band_carousel.js`: Render carousels. Set up style of carousels by editing setting variable.

    * `header.js`, `nav_header.js`, `nav_button.js`, `nav_sub.js`: Header is separated from the homepage so it can be reused by other component. Data need to be passed to Header as props. Header component contains the top header and the navigation bar which is rendered by NavHeader component(`nav_header.js`). Navigation bar contains many NavButton component(`nav_button.js`) and each one have its own dropdown list. Each item in the list is rendered by NavSub component(`nav_sub.js`).

    * `footer.js`: Render footer.

    * Other components within homepage: `cut_bg.js`, `enter_email.js`, `whiteline.js`.

  * `category_page.js`: This component is used for rendering the category page of customize platform. Some components it uses are the same as Homepage. Switching among different category pages is view as routing the same page, so it won't re-render itself. Therefore, we make Ajax requests in the componentWillReceiveProps function. The Ajax request in componentWillReceiveProps function will be called when its props have been changed, thus the content of this page can be changed accordingly. You can also refer to [React Component](https://facebook.github.io/react/docs/react-component.html) for more information.


