//helper functions

const isCCValid = (ccn) => ccn !== null && !Number.isNaN(parseInt(ccn)) && ccn.length > 13;

const getElementValue = id => {
    var item = document.querySelector(id);
    return item && item.value;
}

const processTransaction = val => {
    if (isCCValid(val)) return Promise.resolve('transaction successful');
    else return Promise.reject('credit card is invalid!');
}

//end helper functions

//event handlers

window.onload = function () {
    console.log('window loaded..')
}

document.querySelector('#checkOutForm').addEventListener('submit', e => {
    e.preventDefault();

    //clear previous alerts
    var transactionResult = document.querySelector('#transactionResult');
    transactionResult.childNodes.forEach(item => item.remove());

    console.log('order placed');

    var formObj = {
        creditCardNumber: getElementValue('#CreditCardNumber'),
        expiryMonth: getElementValue('#ExpiryMonth'),
        expiryYear: getElementValue('#ExpiryYear'),
        ccv: getElementValue('#ccv')
    }

    console.log(formObj);

    processTransaction(formObj.creditCardNumber)
        .then(obj => {
            console.log(obj);

            var div = document.createElement('div');
            div.className = 'transaction-success';
            div.innerHTML = obj;

            transactionResult.appendChild(div);

        })
        .catch(err => {
            console.error(err);

            var div = document.createElement('div');
            div.className = 'transaction-failure';
            div.innerHTML = err;

            transactionResult.appendChild(div);
            
        });
});

//end event handlers