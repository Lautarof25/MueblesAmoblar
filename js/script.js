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


const comparisonData = [
    {
        before: "antesdespues/antes1.avif",
        after: "antesdespues/despues1.avif",
        beforeAlt: "Sillón antes de la restauración",
        title: "Sillón modular"
    },
    {
        before: "antesdespues/antes2.avif",
        after: "antesdespues/despues2.avif",
        beforeAlt: "Mueble antes de la restauración",
        title: "Renovación integral"
    },
    {
        before: "antesdespues/antes3.avif",
        after: "antesdespues/despues3.avif",
        beforeAlt: "Sillón antes del retapizado",
        title: "Retapizado"
    },
    {
        before: "antesdespues/antes4.avif",
        after: "antesdespues/despues4.avif",
        beforeAlt: "Sillón de cuero antes de la restauración",
        title: "Restauración de cuero"
    },
    {
        before: "antesdespues/antes5.avif",
        after: "antesdespues/despues5.avif",
        beforeAlt: "Sillón antes del retapizado",
        title: "Retapizado"
    },
    {
        before: "antesdespues/antes6.avif",
        after: "antesdespues/despues6.avif",
        beforeAlt: "Reposapies antes del retapizado",
        title: "Retapizado y restaurado"
    },
    
];

const comparisonStage = document.querySelector(".comparison-stage");
const comparisonRange = document.getElementById("comparisonRange");
const beforeImage = document.getElementById("beforeImage");
const afterImage = document.getElementById("afterImage");
const comparisonTitle = document.getElementById("comparisonTitle");
const comparisonCounter = document.getElementById("comparisonCounter");
const previousComparison = document.getElementById("previousComparison");
const nextComparison = document.getElementById("nextComparison");
const beforeLabel = document.querySelector(".comparison-label-before");
const afterLabel = document.querySelector(".comparison-label-after");
let currentComparison = 0;

function updateComparisonLabels() {
    const position = Number(comparisonRange.value);

    beforeLabel.hidden = position <= 15;
    afterLabel.hidden = position >= 85;
}

function renderComparison() {

    const comparison = comparisonData[currentComparison];

    beforeImage.src = comparison.before;
    beforeImage.alt = comparison.beforeAlt;
    afterImage.src = comparison.after;
    comparisonTitle.textContent = comparison.title;
    comparisonCounter.textContent = `${String(currentComparison + 1).padStart(2, "0")} / ${String(comparisonData.length).padStart(2, "0")}`;
    comparisonRange.value = "50";
    comparisonStage.style.setProperty("--position", "50%");
    updateComparisonLabels();

}

comparisonRange.addEventListener("input", () => {
    comparisonStage.style.setProperty("--position", `${comparisonRange.value}%`);
    updateComparisonLabels();
});

previousComparison.addEventListener("click", () => {
    currentComparison = (currentComparison - 1 + comparisonData.length) % comparisonData.length;
    renderComparison();
});

nextComparison.addEventListener("click", () => {
    currentComparison = (currentComparison + 1) % comparisonData.length;
    renderComparison();
});


const categoryCards = document.querySelectorAll(".category-card");
const imageModal = document.getElementById("imageModal");
const imageModalClose = document.getElementById("imageModalClose");
const imageModalPreview = document.getElementById("imageModalPreview");
const imageModalTitle = document.getElementById("imageModalTitle");
let lastCategoryCard;

function closeImageModal() {

    imageModal.hidden = true;
    imageModalPreview.src = "";
    document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";

    if (lastCategoryCard) {
        lastCategoryCard.focus();
    }

}

categoryCards.forEach(categoryCard => {

    categoryCard.addEventListener("click", event => {

        event.preventDefault();

        const categoryImage = categoryCard.querySelector("img");
        const categoryName = categoryCard.querySelector(".category-name");

        lastCategoryCard = categoryCard;
        imageModalPreview.src = categoryImage.src;
        imageModalPreview.alt = categoryImage.alt;
        imageModalTitle.textContent = categoryName.textContent;
        imageModal.hidden = false;
        document.body.style.overflow = "hidden";
        imageModalClose.focus();

    });

});

imageModalClose.addEventListener("click", closeImageModal);

imageModal.addEventListener("click", event => {

    if (event.target === imageModal) {
        closeImageModal();
    }

});


// Cerrar al seleccionar una opción
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", closeMobileMenu);

});


// Cerrar con ESC
document.addEventListener("keydown", event => {

    if (event.key === "Escape" && !imageModal.hidden) {
        closeImageModal();
        return;
    }

    if (
        event.key === "Escape" &&
        mobileMenu.classList.contains("active")
    ) {
        closeMobileMenu();
    }

});