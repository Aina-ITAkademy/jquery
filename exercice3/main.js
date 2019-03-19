$("#green").click(function() {
    $("#texte").addClass('textGreen')
    $("#texte").removeClass('textBlue')
})

$("#blue").click(function() {
    $("#texte").removeClass('textGreen')
    $("#texte").addClass('textBlue')
})

$("#bold").click(function() {
    $("#texte").addClass('gras')
})

$("#ss_bold").click(function() {
    $("#texte").removeClass('gras')
})

$("#italic").click(function() {
    $("#texte").toggleClass('italic')
})
