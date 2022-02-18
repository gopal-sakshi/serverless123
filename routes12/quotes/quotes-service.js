var fs = require('fs');
var services = {}

services.addPost = async function(req, res) {
    try {
        console.log('inside addPost... why we use try/catch block though');
        // fs.appendFile('../../resources/quotes12.txt', req.body, function (err) {
        //     if(err) {
        //         console.log('error in fs.appendFile');
        //     }
        // });
    } catch (error) {
        console.log(error)
    }
}

services.showALL = async function(req, res) {
    // fs.readFile('../../resources/quotes12.txt', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    // });
}

module.exports = services;