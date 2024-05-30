//#region Aparecer e desaparecer o input Search
function searchclick() {
    var s = document.getElementById("searchclick").style.display = "block";
    // var s = document.getElementById("searchclick").style.display="block";
    // var s = document.getElementById("searchicon").style.display="none";
}

window.addEventListener('resize', () => {
    var s = document.getElementById("searchclick").style.display = "none";
});
//#endregion

//#region Scrolling effect
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    console.log('cur'+currentScrollPos)
    console.log('pre'+prevScrollpos)
    // if (currentScrollPos < 55)
    //     document.body.getElementsByClassName("menudropcollaps")[0].style.position = "absolute";
    // else
    //     document.body.getElementsByClassName("menudropcollaps")[0].style.position = "fixed";

        
    console.log(prevScrollpos > currentScrollPos)
    if (prevScrollpos > currentScrollPos && currentScrollPos<55)
        document.body.getElementsByClassName("menudropcollaps")[0].style.top = "0px";
    else
        document.body.getElementsByClassName("menudropcollaps")[0].style.top = "-150px";
    if ((document.body.getElementsByClassName('navbar-collapse')[0]).classList.toggle('show') == true)
        (document.body.getElementsByClassName('navbar-collapse')[0]).classList.toggle('show');

    prevScrollpos = currentScrollPos;
}

//#endregion

function changeModeColor() {
    var s = document.getElementById("ModeColor").src;

    if (s.includes("whitemode.png"))
        document.getElementById("ModeColor").src = "img/icon/darkmode.png";
    else
        document.getElementById("ModeColor").src = "img/icon/whitemode.png"
}