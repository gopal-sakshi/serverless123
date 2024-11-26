var handler = require('./posts-handler');


function router(api, options) {
    // console.log('api & options ===> ', api, options);
    
    api.METHOD(`POST`, `/addPost`, handler.addPost);    
    api.METHOD(`GET`, `/showALL`, handler.showALL);
    api.METHOD(`GET`, `/showAllAgain`, (req, res) => {
        console.log("path params ===> ", req.params.param12);       
        return new Promise((resolve, reject) => {            
            resolve('see---lambda-api23.txt')
        })
    })
    api.METHOD(`GET`, `/postWithParams/:playerName`, handler.postWithParams);    
}

module.exports = router;