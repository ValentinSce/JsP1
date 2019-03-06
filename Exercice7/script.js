function clic(){
var shoeSize = document.getElementById("shoeSize").value;
var yearOfBirth = document.getElementById("yearOfBirth").value;
if(isNaN(shoeSize) && isNaN(yearOfBirth)){
  alert("entrer des valeurs valides");
}
else{
var calcul = (shoeSize) * 2;
calcul += 5;
calcul *= 50;
calcul -= (yearOfBirth);
calcul += 1768;
return(calcul);
}
}
