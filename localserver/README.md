# MTG Local Server

## Stack Server-Side

### Server
* This application will host an API built in NodeJS using ExpressJS. 


### View Engine
* The server uses a view engine known as PUG. 

## Stack Client-side
The Front end is built using React JS. 

All API calls will transfer JSON for communication. 
* All React code is bundled with Webpack
* All Styles are bundled with Webpack
* All client-side code is located in ./src

## ENV file
* __ENV__=**development** 
    * Webpack dev server is enabled
    * Webpack hot reload is enabled
    * Webpack is compiled automatically
    * CORS is disabled. 
    * __/Views/home.pug__ needs to point to the __layout.pug__ file.
* __ENV__=**production** 
    * Webpack dev server is disabled
    * Webpack hot reload is disabled
    * Expects build to be ran 
    * CORS is enabled. 
    * All bundled files get rendered to the /public directory. 
    * __/Views/home.pug__ needs to point to the __layout.production.pug__ file.


# ENV

You will need to create a .env file in the root.
In the file, you will need to add two variables.

PORT=8080

ENV=development


# Requirements
* NodeJS > v6
* expressjs v4.x
* webpack v3.10.0
