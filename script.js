function placeOrder(){
    var orderForm = document.getElementById("my-form");
 results = "<h3>success</h3> Here is your order.";
  results += "<br>Name: " + orderForm.elements["my-name"].value;
  results += "<br>Address: " + orderForm.elements["my-address"].value;
  results += "<br>Favourite drink: " + orderForm.elements["my-drink"].value;    
 results += "<br>Quantity: " + orderForm.elements["my-qty"].value;
                 
  var orderResults =
  document.getElementById("my-order");
   orderResults.style.display = "block";    
  orderResults.innerHTML = results;

  var n = document.getElementById("my-name");
  if(n=""||!isNaN(parseInt(n)||n.length<4||n.length>7)){
    window.alert("please enter correct name");
    document.my-FormData.my-name.focus();
    return false;
  }

return true;

}
