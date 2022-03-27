var fs = require('fs');
var services = {}

services.addQuote = async function(req, res) {

    // fs.appendFile('../../resources/quotes12.txt', req.body, function (err) {
    //     if(err) {
    //         console.log('error in fs.appendFile');
    //     }
    // });
    req.body += '\n';
    return new Promise((resolve, reject) => {
        fs.promises.appendFile('resources/quotes12.txt', req.body).then(() => {
            resolve(`appended ${req.body}`);
        }).catch(() => {reject ('couldnt append')});
    })
}

services.showALLQuotes = async function(req, res) {
    // fs.readFile('../../resources/quotes12.txt', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    // });

    // console.log('inside show all');

    return new Promise ((resolve, reject) => {
        fs.readFile('resources/quotes12.txt', 'utf-8', function(err, data) {
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
// showAllQuotes --> uses simple fs.readFile
// showNovel --> uses nodeJs stream module...

services.showNovel = async function(req, res) {
    return new Promise((resolve, reject) => {
        const src = fs.createReadStream('resources/a_tale_of_two_cities.txt');
        resolve(src);
    })
}

services.showAllQuotesAsStream
module.exports = services;