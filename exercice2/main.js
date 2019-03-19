var bouton_green = document.getElementById("green");
var bouton_blue = document.getElementById("blue");
var leTexte = document.getElementById("texte")

// Texte vert
bouton_green.addEventListener("click",function (){
    leTexte.style.color = "green"
});

// Texte bleu
bouton_blue.addEventListener("click",function (){
    leTexte.style.color = "blue"
});

// Texte orange
$("#orange").click(function() {
    $("#texte").css('color','orange')
})

// Fonction pour text Noir
function texteNoir() {
    $("#texte").css('color','black')
}
// Text Noir
$("#noir").on("click", texteNoir);

// text violet 
$("#violet").on("click", function() {
    $("#texte").css('color','purple')
})
