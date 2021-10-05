
let costPrice = document.querySelector(".cost-price");
let sellingPrice = document.querySelector(".selling-price");
let buyingStocks = document.querySelector(".buying-stocks");
let submitBtn = document.querySelector(".btn");
let output = document.querySelector(".output");



function submitHandler() {
  // console.log(buyingStocks.value, costPrice.value, sellingPrice.value)

    let cp = Number(costPrice.value*buyingStocks.value);
    let sp = Number(sellingPrice.value);
    calculateProfitAndLoss(cp, sp);

}


function calculateProfitAndLoss(cp, sp) {
  if (cp > sp) {
    let loss = cp -sp ;
    var lossPercent = ((loss / cp) * 100).toFixed(2);

    showOutput(
      `Loss is ${loss} and the percent is ${lossPercent}%`
    );
    output.classList.remove('profit', 'noProfitNorLoss')
    output.classList.add('loss');
  } else if (sp > cp) {
    var profit =sp - cp;
    var profitPercent = ((profit / cp) * 100).toFixed(2);

    showOutput(
      `The profit is ${profit} and the percent is ${profitPercent}%`
    );
    output.classList.remove('loss', 'noProfitNorLoss')
    output.classList.add('profit')
  } else {
    showOutput(`Neither profit neither loss`);
    output.classList.remove('loss', 'profit')
    output.classList.add('noProfitNorLoss')
  }
}

function showOutput(message) {
  output.innerHTML = message;
}

submitBtn.addEventListener("click", submitHandler);