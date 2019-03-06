
function clic(){
var lastname = document.getElementById("lastname").value;
var firstname = document.getElementById("firstname").value;
var city = document.getElementById("city").value;
if (isNaN(lastname) && isNaN(firstname) && isNaN (city)){
alert("Nom : " + lastname + "\n" +
  "Prénom : " + firstname + "\n" +
  "Ville : " + city);
}
else{
  alert("une ou plusieures réponses invalides")
}
}
