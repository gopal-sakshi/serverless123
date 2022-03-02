'use strict'
const router = require("./router");


function setResponseHeaders(data) {
  // presently not doing this.. because I get some errors... Unexpected token M in JSON at position 0 at JSON.parse
  // data.headers = {
  //   'content-type': 'text/plain',
  //   'access-control-allow-origin': '*',
  //   'access-control-allow-methods': 'GET, PUT, POST, DELETE, OPTIONS',
  //   'access-control-allow-headers': 'Content-Type, Authorization, Content-Length, X-Requested-With' 
  // }
  return data;
}

exports.router = async (event, context) => {
  
  const result = await router(event).then((data) => {    
    // console.log('handler-then', data);
    const responseObj = setResponseHeaders(data);
    console.log(responseObj);
    return responseObj;
    // In express.js, response object has json() method ---> it sets all the headers correctly & returns the response in JSON format.
  }).catch((error) => {
    // console.log('handler-error', error);    
    return error;
  });
  return result;
} 
