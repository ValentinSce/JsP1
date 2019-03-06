function clic(){
  //initialisation des variables auxquelles on affecte la méthode getElementById
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
//initialisation d'une variable contenant le résultat de la multiplication des précedantes variables
  var calcul = parseInt(firstNumber) * (secondNumber);
  // si la variable calcule n'est pas un nombre j'affiche un message d'erreur
  if(isNaN(calcul)){
    alert('nombres invalides');
  }
  else{
    alert('resultat : ' + calcul);
  }
}
