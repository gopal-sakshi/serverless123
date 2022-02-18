'use strict'
const router = require("./router");

exports.router = async (event, context) => {
  
  const result = await router(event).then((data) => {    
    console.log('handler-then', data);
    return data;
  }).catch((error) => {
    console.log('handler-error', error);
    return error;
  });
  return result;
} 
