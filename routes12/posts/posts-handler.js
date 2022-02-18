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
}

function handle(operation) {
    
    const method12 = handlerMap[operation];
    console.log('vacha entanta');
    // return async function() {
    //     new Promise ((resolve, reject) => {
    //     if (2<3) resolve('hurray');
    //     else reject('poyindi po');
    //     });
    // }
    
    return async function (req, res) {
        const result = await method12.service(req, res).then(result44 => {
            console.log(`successfully executed, ${method12.methodName}`);
            console.log("abc", result44);
            return result44;
        }).catch(error => {
            console.log('error is ', error);
            return error;
        });
        console.log('returning from function', result);
        return new Promise ((resolve, reject) => {
          if(result) resolve(result);
          else reject(error);
        })
    }

}

module.exports = {
    addPost: handle('addPost'),
    showALL: handle('showALL')
}