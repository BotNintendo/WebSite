
document.addEventListener('DOMContentLoaded', async function () {
    $(document).ready(async function () {
        (document).getElementsByClassName("g-recaptcha")[0].childNodes[0].style = "margin: 0px auto; position: relative";
    });
});

function changeModeColor() {
    var s = document.getElementById("ModeColor");

    if (s.src.includes("img/icon/whitemode.png"))
        document.getElementById("ModeColor").src = "img/icon/darkmode.png";
    else
        document.getElementById("ModeColor").src = "img/icon/whitemode.png";

}