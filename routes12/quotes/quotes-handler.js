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
        const result = await method12.service(req, res).then(res => {
            console.log(`successfully executed, ${method12}`);
        }).catch(error => {
            console.log(error);
        });
        return result;
    }
}

module.exports = {
    addQuote: handle('addQuote'),
    showALLQuotes: handle('showALLQuotes')
}