var userInputs = document.querySelectorAll(".input"); 
var btn = document.querySelector("#btn");
var messageBox = document.querySelector(".message-box");
var message = document.getElementById("message");
var profitLossGIF = document.querySelector(".gif-overlay");

btn.addEventListener("click", clickHandler);

function clickHandler() {
  messageBox.classList.add("hidden");
  var valueList = [];
  for (var i = 0; i < userInputs.length; i++) {
    valueList.push(parseInt(userInputs[i].value));
  }
  var buyPrice = valueList[0];
  var quantity = valueList[1];
  var currentPrice = valueList[2];
  if (buyPrice > 0 && quantity > 0 && currentPrice > 0) {
    if (currentPrice >= buyPrice) {
      var profit = (currentPrice - buyPrice) * quantity;
      var profitPercentage = ((profit / buyPrice) * 100)/quantity;
      messageBox.classList.remove("hidden");
      message.innerHTML ="You gained "+profitPercentage+"%. Your total profit is ₹ "+ profit;
      profitLossGIF.style.background = 'url(img/confetti-10.gif)';
    }else{
      var loss = (buyPrice - currentPrice)* quantity;
      var lossPercentage = ((loss/buyPrice)*100)/quantity;
      messageBox.classList.remove("hidden");
      message.innerHTML ="You lost "+ lossPercentage +"%. Your total loss is ₹ "+ loss;
      profitLossGIF.style.background = 'url(img/warning.gif)';
    }
  }else {
    profitLossGIF.style.background = 'url()';
    messageBox.classList.remove("hidden");
    message.innerHTML ="Please enter values greater than 0 (only numbers are allowed in above fields)";
  }
}
