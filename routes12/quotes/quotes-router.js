var handler = require('./quotes-handler');


function router(api, options) {
    api.METHOD(`POST`, `/addQuote`, handler.addQuote);
    //api.METHOD(`PUT`, `/show3`, handler.show3);
    api.METHOD(`GET`, `/showALLQuotes`, handler.showALLQuotes);
    api.METHOD(`GET`, `/showNovel`, handler.showNovel);
    
}

module.exports = router;