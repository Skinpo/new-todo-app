// const checkBox = document.querySelector(".checkbox");
const pass = document.querySelector(".pass");
const para = document.querySelector(".para");
const icon = document.querySelector(".icon-light-mode");
const iconDark = document.querySelector(".icon-dark-mode");
const header = document.querySelector(".header-light-mode");
const allItems = document.querySelector(".none");
const acvtiveItems = document.querySelector(".active-todo-items");
const completedItems = document.querySelector(".completed-todo-items");
const inputField = document.querySelector(".inpute");
const inputBtn = document.querySelector(".input-btn")


icon.addEventListener("click", () => {
    if (icon.classList.contains("icon-light-mode")){
        icon.classList.replace("icon-light-mode", "icon-dark-mode")
        iconDark.style.visibility = "visible",
        header.src = "../images/bg-desktop-dark.jpg"}

})

iconDark.addEventListener("click", () => {
    if (icon.classList.contains("icon-dark-mode")){
        icon.classList.replace("icon-dark-mode", "icon-light-mode")
        iconDark.style.visibility = "hidden"
        header.src = "../images/bg-desktop-light.jpg"}

})

inputBtn.addEventListener("click", () => {
    const newUl = document.createElement("ul")
    const newLi = document.createElement("li");
    const hr = document.createElement("hr")
    newLi.innerHTML = `
    <img src="../images/icon-check.svg" class="pass" alt="">
    <input type="checkbox" class="checkbox">
    <p class="para">${inputField.value}</p>
    <img src="../images/icon-cross.svg" class="cancel" >
`
        newUl.appendChild(newLi);
        newUl.appendChild(hr);
        allItems.appendChild(newUl);
        inputField.value = "";
        


    const anotherUl = document.createElement("ul");
    const anotherLi = document.createElement("li");
    const anotherHr = document.createElement("hr");
    anotherLi.innerHTML = newLi.innerHTML;

    anotherUl.appendChild(anotherLi);
    anotherUl.appendChild(anotherHr);
    acvtiveItems.appendChild(anotherUl);
    // todo = "";

    // const checkBox = document.querySelector(".checkbox");

    // checkBox.addEventListener("click", () => {
    //     pass.style.visibility = "visible";
    //     para.classList.contains("para")
    //     para.classList.replace("para", "checked");
    // })
});

// checkBox.addEventListener("click", () => {
//     pass.style.visibility = "visible";
//     para.classList.contains("para")
//     para.classList.replace("para", "checked");
// })

