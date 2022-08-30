const checkBox = document.querySelector(".checkbox");
const pass = document.querySelector(".pass");
const para = document.querySelector(".para");
// const icon = document.querySelector(".icon-light-mode");
// const header = document.querySelector(".header-light-mode")

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



