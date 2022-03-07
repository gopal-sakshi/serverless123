const api44 = require('lambda-api')({ version: 'v1.0', base: 'jingchak' })

const posts = require('./routes12/posts/posts-router');
const quotes = require('./routes12/quotes/quotes-router');

// Add CORS Middleware
api44.use((req,res,next) => {  
    res.cors()
    next()
});


async function router(event) {
    // console.log(event);
    const blah24 = await startRestApiService(event);
    // console.log('blah24', blah24);
    return new Promise ((resolve, reject) => {
        if(blah24) {
            resolve(blah24)
        } else {
            reject('something went wrong');
        }
    });
}

async function startRestApiService(event) {
    //const param12 = 'jingchak'
    const param12 = 'param13'


        // this {prefix: '', path: ''} =============> is the 'options' argument/parameter inside router(api, options) in posts-router.js
        // So, what lambda-api does =========>
            // registers 'posts' route... you pass options as 2nd parameter of this register() function
            // so, in router() function of posts-router.js =====> you can access this "options object"
    api44.register(posts, {prefix: '/:param12/posts', path: event.path, urike: 'hello doctor'} );
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