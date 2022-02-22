const services = require('./quotes-service');

const handlerMap = { 
    addQuote: {
        service: services.addQuote,
        errorMsg: `Unable to process!`
    },
    showALLQuotes: {
        service: services.showALLQuotes,
        errorMsg: `Unable to process!`
    },
}

function handle(operation) {
    
    const method12 = handlerMap[operation];

    return async function (req, res) {
        const result = await method12.service(req, res).then(result77 => {
            console.log(`successfully executed, ${method12}`);
            return result77
        }).catch(error => {
            console.log(error);
            return error;
        });
        console.log('returning from function',result);
        return new Promise((resolve, reject)=> {
            if(result) resolve(result);
            else reject(error);
        })
    }
}

module.exports = {
    addQuote: handle('addQuote'),
    showALLQuotes: handle('showALLQuotes')
}