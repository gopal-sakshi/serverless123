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
        const responseObj = setResponseHeaders(data);
        return responseObj;
    }).catch((error) => { return error; });

    return result;
}

exports.compute24 = async (event, context) => {
    console.log("rcvd event @ compute24 ====> ", event);
    return { info: 'true', time23: new Date().toISOString() }
}