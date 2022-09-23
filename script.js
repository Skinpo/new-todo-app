const checkBox = document.querySelector(".checkbox");
const pass = document.querySelector(".pass");
const para = document.querySelector(".para");
// const appTitle = document.querySelector(".app-title")
const icon = document.querySelector(".icon-light-mode");
const iconDark = document.querySelector(".icon-dark-mode");
const header = document.querySelector(".header-light-mode")


icon.addEventListener("click", () => {
    // icon.classList.contains("icon-light-mode");
    // icon.src = "../images/icon-sun.svg"
    if (icon.classList.contains("icon-light-mode")){
        icon.classList.replace("icon-light-mode", "icon-dark-mode")
        iconDark.style.visibility = "visible",
        
        header.src = "../images/bg-desktop-dark.jpg"}

    // if (iconDark.classList.contains("icon-dark-mode")){
    //     icon.src = "../images/icon-moon.svg"
    // }
})

iconDark.addEventListener("click", () => {
    // icon.classList.contains("icon-light-mode");
    // icon.src = "../images/icon-sun.svg"
    if (icon.classList.contains("icon-dark-mode")){
        icon.classList.replace("icon-dark-mode", "icon-light-mode")
        iconDark.style.visibility = "hidden"
        
        header.src = "../images/bg-desktop-light.jpg"}

    // if (iconDark.classList.contains("icon-dark-mode")){
    //     icon.src = "../images/icon-moon.svg"
    // }
})



checkBox.addEventListener("click", () => {
    pass.style.visibility = "visible";
    para.classList.contains("para")
    para.classList.replace("para", "checked");
})

/*
--this logic for changing the image banner of
the header by toggling the light and dark icon: 
header.classList.contains("header-light-mode");
header.src = "../images/bg-desktop-dark.jpg"

-- this logic here is for toggling the icon,
in toggling the icon the image src is toggled:
icon.classList.contains("icon-light-mode");
icon.src = "../images/icon-sun.svg"

--note: 
in changing to darkmode the body element
has to be targeted with the logic below:
document.body.style.backgroundColor = "newColor"
*/



