var menu = document.getElementById("menu-hamburgue")
var list = document.getElementById("menu-list-id")

menu.addEventListener("click", () => {
    menu.classList.toggle("menu-on")
    list.classList.toggle("menu-list-on")
})