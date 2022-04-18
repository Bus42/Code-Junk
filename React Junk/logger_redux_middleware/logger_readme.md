 # Logger
 Simple middleware that logs the `previous state`, `action`, and `next state for Redux applications`

 ## Usage
 
 * copy logger file into your application
 * import into the file in which you will be using `applyMiddleware`
 ``` import logger from '../path/to/logger';
 ```
 * pass logger into `applyMiddleWare`
 ``` store = createStore(reducer, applyMiddleware(logger))
 ```