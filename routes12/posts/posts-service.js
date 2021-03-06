var fs = require('fs');
var services = {}

services.addPost = async function(req, res, leagueName) {

    // console.log('inside addPost ', req.body);
    req.body += '\n';
    return new Promise((resolve, reject) => {
        fs.promises.appendFile('resources/posts12.txt', req.body).then(() => {
            resolve(`appended ${req.body}`);
        }).catch(() => {reject ('couldnt append')});
    });    
}

services.showALL = async function(req, res, leagueName) {
    console.log(leagueName);
    // console.log('inside show all');

    return new Promise ((resolve, reject) => {
        fs.readFile('resources/posts12.txt', 'utf-8', function(err, data) {
            if(err) {
                console.log('err = ',err);
                reject(err);
            } else {
                // console.log(data);
                resolve(data);
            }
        });
    });
}

services.postWithParams = async function(req, res) {
    console.log(req);
    console.log(req.params);
    console.log(req.query);
    return new Promise((resolve, reject) => {
        resolve(`received params & queryParams = ${req.params.playerName} & ${req.query.color}`)
    })
}

module.exports = services;