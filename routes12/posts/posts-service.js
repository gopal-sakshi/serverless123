var fs = require('fs');
var services = {}

services.addPost = async function(req, res) {
    try {
        console.log('inside addPost... why we use try/catch block though');
        fs.appendFile('resources/posts12.txt', req.body, function (err) {
            if(err) {
                console.log('error in fs.appendFile');
            }
        });
    } catch (error) {
        console.log(error)
    }
}

services.showALL = async function(req, res) {

    console.log('inside show all');

    return new Promise ((resolve, reject) => {
        fs.readFile('resources/posts12.txt', 'utf-8', function(err, data) {
            if(err) {
                console.log('err = ',err);
                reject(err);
            } else {
                console.log(data);
                resolve(data);
            }
        });
    });
}

module.exports = services;