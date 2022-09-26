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
        header.src = "../images/bg-desktop-dark.jpg"
        document.body.style.backgroundColor = "#161722"}

})

iconDark.addEventListener("click", () => {
    if (icon.classList.contains("icon-dark-mode")){
        icon.classList.replace("icon-dark-mode", "icon-light-mode")
        iconDark.style.visibility = "hidden"
        header.src = "../images/bg-desktop-light.jpg"
        document.body.style.backgroundColor = "white"}

})

inputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newUl = document.createElement("ul")
    const newLi = document.createElement("li");
    const hr = document.createElement("hr")
    newLi.innerHTML = `
    <img src="../images/icon-check.svg" class="pass" alt="">
    <input type="checkbox" class="checkbox">
    <p class="para par">${inputField.value}</p>
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


    const checkBox = document.querySelectorAll(".checkbox");
    const para = document.querySelector(".para")


     for (let i = 0; i < checkBox.length; i++) {
        const tick = checkBox[i];
        tick.addEventListener("click", () => {
            console.log("say yes");
            // if (para.classList.contains("par")) {
            //     para.classList.replace("par", "checked");
            // }
        })
        
    }

});


// ************************************************
// ways to make the tick appear in all items

 // const checkBox = document.querySelectorAll(".checkbox");

    // for (let i = 0; i < checkBox.length; i++) {
    //     const tick = checkBox[i];
    //     tick.addEventListener("click", () => {
    //         if (para.classList.contains("para")) {
    //             para.classList.replace("para", "checked");
    //         }else {
    //             para.classList.replace("checked", "para")
    //         }
    //     })
        
    // }




      // checkBox.addEventListener("click", () => {
    // if (para.classList.contains("par")) {
    //     para.classList.replace("par", "checked");
    // }else {
    //     para.classList.replace("checked", "par")
    // }
    // })


// **************************************

//  Cancel

    // const cancel = document.querySelector(".cancel");

    // cancel.addEventListener("click", () => {
    // allItems.innerHTML--;
    // })





