console.log('JS loaded');

document.getElementById('hamburgerToggle').onclick = function() {
    var element = document.getElementById("hamMenuToggle");
    element.classList.toggle("display-none");

}

function navbarShrink (x) {
    if (x.matches) {
        var navbarMenu = document.getElementById("navbarMenu");
        navbarMenu.classList.add("display-none");

        var headerIcon = document.getElementById("headerIcon");
        headerIcon.classList.remove("header-icon");
        headerIcon.classList.add("header-icon-small");

        var hamburgerIcon = document.getElementById("hamburgerToggle");
        hamburgerIcon.classList.remove("display-none");


    } else {
        var navbarMenu = document.getElementById("navbarMenu");
        navbarMenu.classList.remove("display-none");

        var headerIcon = document.getElementById("headerIcon");
        headerIcon.classList.remove("header-icon-small");
        headerIcon.classList.add("header-icon");

        var hamburgerIcon = document.getElementById("hamburgerToggle");
        hamburgerIcon.classList.add("display-none");
    }
}

var x = window.matchMedia('(max-width: 576px)');

navbarShrink(x);

x.addEventListener('change', function() {
    navbarShrink(x);
});