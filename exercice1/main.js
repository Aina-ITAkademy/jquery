// Tout les p en vert
$("#green").on("click", function() {
    $("p").css('color','green')
})

// Tout les li en bleu
$("#blue").on("click", function() {
    $("li").css('color','blue')
})

// Premier li en orange 
$("#orange").on("click", function() {
    $("li:first").css('color','orange')
})

// Deuxieme li en jaune
$("#yellow").on("click", function() {
    $("li:eq(1)").css('color','yellow')
})

// Tous les elements ayant une classe red en rouge
$("#red").on("click", function() {
    $(".red").css('color','red')
})

// Le 2eme li du 2eme ul en rose
$("#pink").on("click", function() {
    $("ul:eq(1) > li:eq(1)").css('color','pink')
})

// Le 4eme li du 1er ul en marron
$("#marron").on("click", function() {
    $("ul:first > li:eq(3)").css('color','brown')
})