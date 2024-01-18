/* Menu */
const button = document.getElementById("btn-menu")
const main_menu = document.getElementsByClassName("main-menu")[0]

/* Search Bar */
const logo = document.getElementsByClassName("logo")[0]
const input = document.getElementsByClassName("search")[0]
const button_search = document.getElementsByClassName("search")[1]

/* Services */
const img_services = document.getElementsByClassName("img-services")

/* Events */
button.addEventListener("click", () => {
    if (!button.classList.contains("active")) {

        if (input.classList.contains("show-search")) {
            input.classList.remove("show-search")
            button_search.classList.remove("show-search")
            logo.classList.remove("logo-margin")

        }

        button.classList.add("active")
        main_menu.style.display = "block"

    }

    else {
        button.classList.remove("active")
        main_menu.style.display = "none"

    }


})

main_menu.addEventListener("click", () => {
    button.classList.remove("active")
    main_menu.style.display = "none"

})

button_search.addEventListener("click", () => {
    if (button.classList.contains("active")) {
        button.classList.remove("active")
        main_menu.style.display = "none"

    }
    logo.classList.add("logo-margin")
    input.classList.add("show-search")
    button_search.classList.add("show-search")

})


Array.from(img_services).forEach(element => {
    element.addEventListener("mouseover", () => {
        if (button.classList.contains("active")) {
            button.classList.remove("active")
            main_menu.style.display = "none"
    
        }
        element.classList.add("hover")

    })

    element.addEventListener("mouseout", () => {
        element.classList.remove("hover")

    })
    
})
