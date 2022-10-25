const services = require('./quotes-service');

const handlerMap = { 
    addQuote: {
        service: services.addQuote,
        methodName: 'addQuote',
        errorMsg: `Unable to process!`
    },
    showALLQuotes: {
        service: services.showALLQuotes,
        methodName: 'showAllQuotes',
        errorMsg: `Unable to process!`
    },
    showNovel: {
        service: services.showNovel,
        methodName: 'showNovel',
        errorMsg: `Unable to process!`
    }
}

function handle(operation) {
    
    const method12 = handlerMap[operation];

    return async function (req, res) {
        const result = await method12.service(req, res, 'EPL').then(result77 => {
            console.log(`successfully executed, ${method12.methodName}`);
            return result77
        }).catch(error => {
            console.log(error);
            return error;
        });
        console.log('return value = ',result)
        // console.log('returning from function',result);
        return new Promise((resolve, reject)=> {
            if(result) resolve(result);
            else reject('error');
        })
    }
}

module.exports = {
    addQuote: handle('addQuote'),
    showALLQuotes: handle('showALLQuotes'),
    showNovel: handle('showNovel')
}