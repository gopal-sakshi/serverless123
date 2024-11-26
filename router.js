const api44 = require('lambda-api')({ version: 'wewe', base: 'jingchak' })
api44.use((req,res,next) => { res.cors(); next(); });       // Add CORS Middleware

const posts = require('./routes12/posts/posts-router');
const quotes = require('./routes12/quotes/quotes-router');

async function router(event) {
    return new Promise (async (resolve, reject) => {
        const blah24 = await startRestApiService(event);
        if(blah24) { resolve(blah24) } 
        else { reject('something went wrong'); }
    });
}

async function startRestApiService(event) {
    // console.log("event.body/payload ====> ", event.body);
    // console.log("event.headers ====> ", event.headers);
    console.log("event.httpMethod ====> ", event.httpMethod);
    console.log("event.path =====> ", event.path);
    console.log("event.resource23 =====> ", event.resource);    


    api44.register(posts, { prefix: '/:param12/posts', path: event.path, urike: 'hello doctor'} );
    api44.register(quotes, { prefix: '/:param12/quotes', path: event.path } );
    var result76;
    return await api44.run(event, undefined, (err, data) => {
        if(err) { result76 = err } 
        else { console.log('event successfully ran ===> \n\n', data); result76 = data; }        
    });
}

module.exports = router;