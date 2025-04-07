const btnMenu = document.querySelector("button.menu")
const mobileMenu = document.querySelector("#mobile-menu")
const btnClose = document.querySelector("button.close")



btnMenu.addEventListener("click", () => {
    btnMenu.classList.add("hidden")
    mobileMenu.classList.add("open")
})
btnClose.addEventListener("click", () => {
    btnMenu.classList.remove("hidden")
    mobileMenu.classList.remove("open")
})
mobileMenu.addEventListener("click", (event) => {
    if (event.target !== mobileMenu) return
    btnMenu.classList.remove("hidden")
    mobileMenu.classList.remove("open")
})