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

    calculateProfitAndLoss(int, qty, currn);
}


function calculateProfitAndLoss(initial, quantity, current){
       if(initial  >   current){
           var loss = Number(initial - current)*quantity;
           var lossPercentage = Number(loss/initial)*100;
           displayOutput("You suffered a loss of " + loss + " and lost percentage is " + lossPercentage.toFixed(2) + "%");

    }
    else if(current    >   initial){
           var profit = Number(current - initial)*quantity;
           var profitPercentage = Number(profit/initial)*100;
           displayOutput("You suffered a profit of " + profit + " and profit percentage is " + profitPercentage.toFixed(2) + "%");
    }
    else {
        displayOutput("Nothing lost or gained ");
    }
}

function displayOutput(message){
    result.innerText = message;

}


