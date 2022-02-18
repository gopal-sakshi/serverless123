const api44 = require('lambda-api')({ version: 'v1.0', base: 'jingchak' })

const posts = require('./routes12/posts/posts-router');
const quotes = require('./routes12/quotes/quotes-router');

// Add CORS Middleware
api44.use((req,res,next) => {  
    res.cors()
    next()
});


async function router(event) {
    api44.register(posts, {prefix: '/jingchak/posts', path: event.path} );
    api44.register(quotes, {prefix: '/jingchak/quotes', path: event.path} );
    // api44.run(event,context,callback);
    api44.run(event);
    //return api44.run(event);
}

module.exports = router;