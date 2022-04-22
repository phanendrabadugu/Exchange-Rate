const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//Event Listeners

currencyEl_one.addEventListener("change",caclulate);
amountEl_one.addEventListener("input",caclulate);
currencyEl_one.addEventListener("change",caclulate);
amountEl_two.addEventListener("input",caclulate);

//swap

swap.addEventListener("click", () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value= currencyEl_two.value;
    currencyEl_two.value= temp;
    caclulate();
});


//functions

//Fetch exchange rates and update the DOM

function caclulate(){

    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
     //console.log(currencyEl_one.value)

    //Fetching data from DB
    fetch(`https://v6.exchangerate-api.com/v6/b5a4cfb2b72bb7334133396d/latest/${currency_one}`)
    .then(response=>response.json())
    .then(data=>{
        const rate = data.conversion_rates[currency_two];
        //console.log(data.conversion_rates[currency_one])
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value*rate).toFixed(2);
    });
    
}

caclulate();