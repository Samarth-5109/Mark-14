var initialPrice    =   document.querySelector("#initial-price");
var stocksQuantity    =   document.querySelector("#quantity");
var currentPrice    =   document.querySelector("#current-price");
var calculateBtn =   document.querySelector("#calculate-btn");
var result  =   document.querySelector("#output");

calculateBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var int = initialPrice.value;
    var qty = stocksQuantity.value;
    var currn = currentPrice.value;
    if (int && qty && currn) {
        if (int == 0 && qty >= 0 && currn >= 0) {
            //message.style.color = "#355c7d";
            displayOutput(" Enter valid amount.")
        } else if (int > 0 && qty> 0 && currn > 0) {
            calculateProfitAndLoss(Number(int), Number(qty), Number(currn));
        } else {
           // message.style.color = "#355c7d";
            displayOutput('Enter valid input to continue');
        }
    } else {
        //message.style.color = "#355c7d";
        displayOutput('Enter valid input to continue');
    }

    //calculateProfitAndLoss(int, qty, currn);
}


function calculateProfitAndLoss(initial, quantity, current){
       if(initial  >   current){
           var loss = (initial - current)*quantity;
           var lossPercentage = ((loss/(initial*quantity))*100);
           displayOutput("You suffered a loss of 📉 " + loss + " and lost percentage is " + lossPercentage.toFixed(2) + "% 😥");

    }
    else if(current    >   initial){
           var profit = (current - initial)*quantity;
           var profitPercentage = ((profit/(initial*quantity))*100);
           displayOutput("You suffered a profit of 📈 " + profit + " and profit percentage is " + profitPercentage.toFixed(2) + "% 🤗");
    }
    else {
        displayOutput("Nothing lost or gained, LOL 😂 ");
    }
}

function displayOutput(message){
    result.innerText = message;

}


