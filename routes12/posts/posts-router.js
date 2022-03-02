var handler = require('./posts-handler');


function router(api, options) {
    api.METHOD(`POST`, `/addPost`, handler.addPost);
    //api.METHOD(`PUT`, `/show3`, handler.show3);
    api.METHOD(`GET`, `/showALL`, handler.showALL);
    api.METHOD(`GET`, `/postWithParams/:playerName`, handler.postWithParams);    
}

module.exports = router;