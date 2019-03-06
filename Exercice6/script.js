function clic(){
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var calcul = (firstNumber) % (secondNumber);
  if(isNaN(calcul)){
    alert('saisir des valeurs correctes');
  }else{
    alert("le reste est de : " + calcul);
  }
}
