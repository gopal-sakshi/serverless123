'use strict'
const router = require("./router");

exports.router = async (event, context, callback) => {
  
  const result = await router(event).then((data) => {    
    console.log('handler-then', data);
  }).catch((error) => {
    console.log('handler-error', error);    
  });
  return result;
} 
