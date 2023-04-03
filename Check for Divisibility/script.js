let numOne, numTwo, res, temp;
function fun()
{
  numOne = parseInt(document.getElementById("one").value);
  numTwo = parseInt(document.getElementById("two").value);
  if(numOne && numTwo)
  {
    temp = document.getElementById("res");
    temp.style.display = "block";
    res = numOne + numTwo;
    document.getElementById("add").value = res;
    res = numOne - numTwo;
    document.getElementById("subtract").value = res;
    res = numOne * numTwo;
    document.getElementById("multiply").value = res;
    res = numOne / numTwo;
    document.getElementById("divide").value = res;
  }
}