const services = require('./posts-service');


const handlerMap = { 
    addPost: {
        service: services.addPost,
        methodName: 'addPost',
        errorMsg: `Unable to process!`
    },
    showALL: {
        service: services.showALL,
        methodName: 'showAll',
        errorMsg: `Unable to process!`
    },
    postWithParams: {
        service: services.postWithParams,
        methodName: 'postWithParams',
        errorMsg: 'Unable to Process!'
    }
}

function handle(operation) {
    
    const method12 = handlerMap[operation];
    
    return async function (req, res) {
        const result = await method12.service(req, res, 'LaLiga').then(result44 => {
            console.log(`successfully executed, ${method12.methodName}`);
            //console.log("abc", result44);
            return result44;
        }).catch(error => {
            console.log('error is ', error);
            return error;
        });
        // console.log('returning from function', result);
        return new Promise ((resolve, reject) => {
          if(result) resolve(result);
          else reject(error);
        })
    }

}

module.exports = {
    addPost: handle('addPost'),
    showALL: handle('showALL'),
    postWithParams: handle('postWithParams')
}