'use strict'
const router = require("./router");


function setResponseHeaders(data) {
  data.headers = {
    'content-type': 'text/plain',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'access-control-allow-headers': 'Content-Type, Authorization, Content-Length, X-Requested-With' 
  }
  return data;
}

exports.router = async (event, context) => {
  
  const result = await router(event).then((data) => {    
    console.log('handler-then', data);
    const responseObj = setResponseHeaders(data);
    console.log(responseObj);
    return responseObj;
  }).catch((error) => {
    console.log('handler-error', error);    
    return error;
  });
  return result;
} 
