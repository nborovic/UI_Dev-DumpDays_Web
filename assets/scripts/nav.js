let hamburgerIcon = document.querySelector(".content-wrapper__hamburger-icon");
let closeIcon = document.querySelector(".nav__close-icon");
let navMobile = document.querySelector(".content-wrapper__nav-mobile");

hamburgerIcon.addEventListener("click", function() { openNav() });
closeIcon.addEventListener("click", function() { closeNav() })

function openNav() {
    navMobile.style.display = "flex";
}

function closeNav() {
    navMobile.style.display = "none";
}