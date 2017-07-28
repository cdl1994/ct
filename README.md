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

## Production version
To deploy this application in production, this project should be compiled and compress first. Run `npm run build`, and it will do everything for you. There will be a folder named `build`. All Javascript codes, frameworks, plug-ins and files will be automatically packed and minified into a single file in the `build\static\js` directory. In this case, production server will not need React framework nor Node.js anymore. Also, there are some conditional compilation to distinguish development and production environment using `process.env.NODE_ENV`.

## Platform switching
In development version, we use `&store_id=1` suffix in URL of Ajax requests to choose platform, in which `store_id` is the ID of store. In production, to avoid CORS requests, we will use the same domain name in front-end and back-end. Therefore, we use Javascript to get platform information directly. Conditional complication will choose according to development or production environment.

## React-Router
As a single page application (SPA), all paths inside of this application are handled in `index.js` using React-Router component. Therefore, in production environment, all paths that directly handled by React should be redirected to the same page.