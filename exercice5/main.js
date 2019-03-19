$("#green").click(function() {
    $("li:first").text("Hello world")
})


$("#green2").click(function() {
    $("ul:first > li:eq(1)").append("ceci est un ajout")
})

$("#green3").click(function() {
    $("ul:first > li:eq(3)").prepend("ceci est un ajout")
})

$("#blue").click(function() {
    $("ul:first").append("<li>je suis un nouveau li</li>")
})

$("#blue2").click(function() {
    $("ul:first").append("<li>je suis un nouveau li</li>")
})

$("#red").click(function() {
    $("ul:first").append($("ul:eq(1) > li:eq(1)").clone())
})

