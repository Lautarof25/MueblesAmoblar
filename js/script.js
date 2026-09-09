const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");


// Abrir menú
menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("active");

    menuButton.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";

});


// Cerrar menú
function closeMobileMenu() {

    mobileMenu.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";

}

closeMenu.addEventListener("click", closeMobileMenu);


// Cerrar al seleccionar una opción
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", closeMobileMenu);

});


// Cerrar con ESC
document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        mobileMenu.classList.contains("active")
    ) {
        closeMobileMenu();
    }

});