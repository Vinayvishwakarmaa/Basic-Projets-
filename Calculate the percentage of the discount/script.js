function calculateDiscount(price,discount) {
    return (price - (price * (discount/100))).toFixed(2);
}


document.getElementById("submit_btn").onclick = function(){
  var price = Number(document.getElementById("price_input").value);
  var discount =    Number(document.getElementById("discount_input").value);
  var calculated = calculateDiscount(price,discount);
  document.getElementById("price_tag").innerHTML = calculated;
}