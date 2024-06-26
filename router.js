const api44 = require('lambda-api')({ version: 'wewe', base: 'jingchak' })

const posts = require('./routes12/posts/posts-router');
const quotes = require('./routes12/quotes/quotes-router');

// Add CORS Middleware
api44.use((req,res,next) => { res.cors(); next(); });


async function router(event) {    
    const blah24 = await startRestApiService(event);    
    return new Promise ((resolve, reject) => {
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
    // Other keys in event Obj ====> pathParameters, queryStringParameters, requestContext



    //const param12 = 'jingchak'
    const param12 = 'param13'

    /**********************************************************************************

    { prefix: '', path: '' } =======> is the 'options' argument inside router(api, options) in posts-router.js
    what lambda-api does =========>
        registers 'posts' route... you pass options as 2nd parameter of this register() function
        so, in router() function of posts-router.js =====> you can access this "options object"

    **********************************************************************************/
    api44.register(posts, { prefix: '/:param12/posts', path: event.path, urike: 'hello doctor'} );
    api44.register(quotes, {prefix: '/:param12/quotes', path: event.path} );
    // api44.run(event,context,callback);
    // api44.run(event);
    var result76;
    await api44.run(event, undefined, (err, data) => {
        if(err) {
            result76 = err            
        } else {
            // console.log('event successfully ran');
            // console.log(data);
            result76 = data;
        }        
    });
    return result76;
}

module.exports = router;