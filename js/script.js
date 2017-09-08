$(document).ready(function () {

    var txt1 = "<p>Henter JSON fra http://pokeapi.co/api/v2/pokemon/bulbasaur/</p>";
    $("#app").append(txt1);
    $("h1").css("color", "navy");


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://pokeapi.co/api/v2/pokemon/bulbasaur/",
        "method": "GET",
        "headers": {}
    }

    $.ajax(settings).done(function (response) {
        //console.log(JSON.parse(response));
        console.log(response);
        parsedResponse = JSON.parse(JSON.stringify(response));
        pokeObj = JSON.parse(JSON.stringify(response));
        var textArea = "<p>JSON data er hentet: </p><textarea rows='4' cols='50'>\n" +
            JSON.stringify(parsedResponse);
            + "</textarea>";
        $("#app").append(textArea);

        txt1 = "<p>Viser billedet fra <code>pokeObj.sprites.front_default</p></code>";
        $("#app").append(txt1);

        img = "<br><img src='" + pokeObj.sprites.front_default + "'/>";
        $("#app").append(img);


    });

});

