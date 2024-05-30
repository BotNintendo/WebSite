document.addEventListener('DOMContentLoaded', async function () {

    $.getJSON('https://apinintendistas.onrender.com/api/newsIndex', function (data) {
        if (data != undefined) {

            // var s = document.getElementById("DivShowNoticias");
            // s.innerHTML = "";
            // data.forEach(element => {

            //     var as = document.createElement("div");
            //     var s = document.getElementById("DivShowNoticias");

            //     var hashtag = hashtags(element.Hashtags);
            //     as.innerHTML = `<div class=\"DivNews\"><div class=\"DivImage\"><img src=\"${element.Image}\" class=\"imgNews\"></div><div class=\"DivText\"><h4>${element.Titulo}</h4><div class=\"divTexto\">${element.Mensagem}</div> <div class=\"filternoticia\"> ${hashtag}<div class=\"divdata\">${element.Datetime}</div> </div> </div>`;

            //     s.appendChild(as);
            // });
            console.log(data);
        }

    });

});