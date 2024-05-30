function newsAll() {
    console.log("1");
    var s = document.getElementsByClassName("DivFiltro")[0].style;

    if (s.display == "none" || s.display == "")
        s.display = "block";
    else
        s.display = "none";

}


function filter(idObject) {

    /*TOOD: Pedir ajuda ao professor de html e css, porque as vezes o valor é 2 outras vezes é undefined e as vezes idObject.lenght == 2 é false quando é 2 */

    if (2 == idObject.length) {
        idObject[0].style.backgroundColor = "#f0f";
        idObject[1].style.backgroundColor = "#f0f";
        idObject[0].id = `${idObject[0].id} Check`;
    }
    else {
        if (idObject.id == "pesquisa") {


            // ligar a api e procurar news com essas categorias!
        }
        else {
            var s = document.getElementById(idObject.id + " Check");
            s.id = `${idObject.id}`;
            idObject.style.backgroundColor = "rgb(65, 61, 61)";
            s.style.backgroundColor = "rgb(65, 61, 61)";

        }
    }

}

function ShowMore() {
    //ligar a api
}

async function load() {
    // $.getJSON('https://apinintendistas.onrender.com/api/news', function (data) {
    //     if (data != undefined) {

    //         var s = document.getElementById("DivShowNoticias");
    //         s.innerHTML = "";
    //         data.forEach(element => {

    //             var as = document.createElement("div");
    //             var s = document.getElementById("DivShowNoticias");

    //             var hashtag = hashtags(element.Hashtags);
    //             as.innerHTML = `<div class=\"DivNews\"><div class=\"DivImage\"><img src=\"${element.Fonte}\" class=\"imgNews\"></div><div class=\"DivText\"><h4>${element.Titulo}</h4><div class=\"divTexto\">${element.Mensagem}</div> <div class=\"filternoticia\"> ${hashtag}<div class=\"divdata\">${element.Datetime}</div> </div> </div>`;

    //             s.appendChild(as);
    //         });
    //     }

    // });

    // $.ajax({
    //     url: 'https://apinintendistas.onrender.com/api/news',
    //     headers: {
    //         'User-Agent': 'insomnia/9.1.0', // Add your access token or any other headers here
    //     },
    //     dataType: 'json',
    //     success: function(data) {
    //         if (data != undefined) {
    //             var s = document.getElementById("DivShowNoticias");
    //             s.innerHTML = "";
    //             data.forEach(element => {
    //                 var as = document.createElement("div");
    //                 var s = document.getElementById("DivShowNoticias");
    //                 var hashtag = hashtags(element.Hashtags);
    //                 as.innerHTML = `<div class=\"DivNews\"><div class=\"DivImage\"><img src=\"${element.Fonte}\" class=\"imgNews\"></div><div class=\"DivText\"><h4>${element.Titulo}</h4><div class=\"divTexto\">${element.Mensagem}</div> <div class=\"filternoticia\"> ${hashtag}<div class=\"divdata\">${element.Datetime}</div> </div> </div>`;
    //                 s.appendChild(as);
    //             });
    //         }
    //     }
    // });
}

document.addEventListener('DOMContentLoaded', async function () {

    $.getJSON('https://apinintendistas.onrender.com/api/news', function (data) {
        if (data != undefined) {

            var s = document.getElementById("DivShowNoticias");
            s.innerHTML = "";
            data.forEach(element => {

                var as = document.createElement("div");
                var s = document.getElementById("DivShowNoticias");

                var hashtag = hashtags(element.Hashtags);
                as.innerHTML = `<div class=\"DivNews\"><div class=\"DivImage\"><a target="_blank" href=\"${element.Fonte}\"><img src=\"${element.Image}\" class=\"imgNews\"></a></div><div class=\"DivText\"><h4>${element.Titulo}</h4><div class=\"divTexto\">${element.Mensagem}</div> <div class=\"filternoticia\"> ${hashtag}<div class=\"divdata\">${element.Datetime}</div> </div> </div>`;

                s.appendChild(as);
            });
            
            var midnight = new Date(new Date()).setHours(24, 0, 0, 0); // Set to next day's midnight
            
            var millisecondsUntilMidnight = midnight - new Date();

            var expires = new Date(new Date() + millisecondsUntilMidnight).toUTCString();

            document.cookie = "Noticias=" + encodeURIComponent(JSON.stringify(data) || "") + "; expires=" + expires + "; path=/";
            console.log(document.cookie);
        }

    });

});

function hashtags(hashtags) {
    let ss = "";
    if (hashtags.includes("#NintendoSwitch")) {
        ss += "<div class=\"Divcategoria\">Nintendo Switch <img src=\"./img/Hashtags/NS.png\" class=\"hastagsimg\"\"></div>";
    }
    if (hashtags.includes("#CuriosidadeNintendo")) {
        ss += "<div class=\"Divcategoria\"> 👀 Curiosidade Nintendo</div>";
    }
    if (hashtags.includes("#Mario")) {
        ss += "<div class=\"Divcategoria\"> 🍄 Mario</div>";
    }
    if (hashtags.includes("#Zelda")) {
        ss += "<div class=\"Divcategoria\"> 🏹 Zelda</div>";
    }
    if (hashtags.includes("#Kirby")) {

        ss += "<div class=\"Divcategoria\"> 🌸 Kirby</div>";
    }
    if (hashtags.includes("#Splatoon")) {

        ss += "<div class=\"Divcategoria\"> 🦑 Splatoon</div>";
    }
    if (hashtags.includes("#AnimalCrossing")) {

        ss += "<div class=\"Divcategoria\"> 🌱 Animal Crossing</div>";
    }
    if (hashtags.includes("#Nintendo")) {

        ss += "<div class=\"Divcategoria\"> 🟥 Nintendo</div>";
    }
    if (hashtags.includes("#NintendoSwitchOnline")) {

        ss += "<div class=\"Divcategoria\"> 📡 Nintendo Switch Online</div>";
    }
    if (hashtags.includes("#FireEmblem")) {

        ss += "<div class=\"Divcategoria\"> ⚔ Fire Emblem</div>";
    }
    if (hashtags.includes("#SmashBros")) {

        ss += "<div class=\"Divcategoria\"> 👊 Smash Bros</div>";
    }
    if (hashtags.includes("#Metroid")) {

        ss += "<div class=\"Divcategoria\"> 🌑 Metroid</div>";
    }
    if (hashtags.includes("#DonkeyKong")) {

        ss += "<div class=\"Divcategoria\"> 🍌 Donkey Kong</div>";
    }
    if (hashtags.includes("#Eventos")) {

        ss += "<div class=\"Divcategoria\"> 🎫 Eventos</div>";
    }
    if (hashtags.includes("#Indies")) {

        ss += "<div class=\"Divcategoria\"> 🎮 Indies</div>";
    }
    if (hashtags.includes("#Sonic")) {

        ss += "<div class=\"Divcategoria\"> 💎 Sonic</div>";
    }
    if (hashtags.includes("#Bayonetta")) {

        ss += "<div class=\"Divcategoria\"> 🔮 Bayonetta</div>";
    }
    if (hashtags.includes("#Xenoblade")) {

        ss += "<div class=\"Divcategoria\"> 🌌 Xenoblade</div>";
    }
    if (hashtags.includes("#Review")) {

        ss += "<div class=\"Divcategoria\"> ✍ Review</div>";
    }
    if (hashtags.includes("#Pokemon")) {

        ss += "<div class=\"Divcategoria\"> 🔴 Pokemon</div>";
    }
    if (ss == "")
        ss += "<div class=\"Divcategoria\"> 🕹 Outros</div>";

    return ss;
}