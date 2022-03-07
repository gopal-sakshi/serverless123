var handler = require('./posts-handler');


function router(api, options) {
    // console.log('api', api);
    // console.log('options', options);
        // options -----> 2nd argument when we called register() method
        // Notice ====> register method is called on // "posts-router.js"       so, all routes in this file will be registered
                                                    // "quotes-router.js"

    // api.METHOD () ==========> it takes 3 arguments    
    api.METHOD(`POST`, `/addPost`, handler.addPost);
    //api.METHOD(`PUT`, `/show3`, handler.show3);
    api.METHOD(`GET`, `/showALL`, handler.showALL);
    api.METHOD(`GET`, `/showAllAgain`, (req, res) => {
        // console.log(req);

        // get path params
        console.log(req.params.param12);       


        return new Promise((resolve, reject) => {            
            resolve('directly using callback here itself... so, the 3rd param of api.METHOD() is (req, res)  ---> where req is http request object & res is response object... but for some reason, I cant properly use res object')
        })
    })
    api.METHOD(`GET`, `/postWithParams/:playerName`, handler.postWithParams);    
}

module.exports = router;