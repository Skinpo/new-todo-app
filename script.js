// const icon = document.querySelector(".icon-light-mode");
// const iconDark = document.querySelector(".icon-dark-mode");
// const header = document.querySelector(".header-light-mode");
const allItems = document.querySelector(".none");
const completedItems = document.querySelector(".completed-todo-items");
const inputField = document.querySelector(".inpute");
const para = document.querySelectorAll(".para");
const inputBtn = document.querySelector(".input-btn");


// icon.addEventListener("click", () => {
//     if (icon.classList.contains("icon-light-mode")){
//         icon.classList.replace("icon-light-mode", "icon-dark-mode")
//         iconDark.style.visibility = "visible",
//         header.src = "../images/bg-desktop-dark.jpg"
//         document.body.style.backgroundColor = "#161722"
    
//         const dark = document.querySelectorAll(".dark");
//         for (let i = 0; i < dark.length; i++) {
//             dark[i].style.backgroundColor = "#25273c"    
//         }
        
//         const main = document.querySelector(".main");
//         main.style.backgroundColor = "#161722"    
        
//         let para = document.querySelectorAll(".para");
//         for (let i = 0; i < para.length; i++) {
//             const letters = para[i];
//         letters.style.color = "white";}
//     }

// })

// iconDark.addEventListener("click", () => {
//     if (icon.classList.contains("icon-dark-mode")){
//         icon.classList.replace("icon-dark-mode", "icon-light-mode")
//         iconDark.style.visibility = "hidden"
//         header.src = "../images/bg-desktop-light.jpg"
//         document.body.style.backgroundColor = "white"
    
//         const dark = document.querySelectorAll(".dark");
//         for (let i = 0; i < dark.length; i++) {
//             dark[i].style.backgroundColor = "white"    
//         }
//         const main = document.querySelector(".main");
//         main.style.backgroundColor = "white"

//         let para = document.querySelectorAll(".para");
//         for (let i = 0; i < para.length; i++) {
//             const letters = para[i];
//         letters.style.color = "#484b6a";}
//     }

// })
    // const num = document.querySelector(".num");
    // const nav = document.querySelector(".nav");
    const button = document.querySelector("button");
    // const counting = document.createElement("div");
    // let count = document.querySelector(".count");
    // counting.setAttribute("class", "counting");
    // counting.innerHTML = `
    //     <p class="count">5 Items left</p>
    // `
    
    // console.log(count);
    // nav.append(counting);
    // nav.insertBefore(counting, nav.firstElementChild);

    const lists = document.querySelector(".lists");
    const completeList = document.querySelector(".complete-lists");
    const activeLists = document.querySelector(".active-lists");
    const count = document.querySelector(".count");



inputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(inputField.value === '') {
        return window.alert("input field cannot be empty");
    }

    let d = new Date();
    let id = document.createElement("id");
    id = d.getMilliseconds();
    console.log(id);

    count.innerHTML++

    const newLi = document.createElement("li");
    newLi.setAttribute("class", "list-item");
    newLi.setAttribute("id", `${id}-li`);

    newLi.innerHTML = `
    <div class="cbox">
        <input type="checkbox" class="checkbox">
        </div>
        <div class="par">
        <p class="para">${inputField.value}</p>
        </div>
        <div class="cbox">
        <img src="../images/icon-cross.svg" class="cancel" >
        </div>
    `

        lists.appendChild(newLi);
        allItems.appendChild(lists);
        inputField.value = "";
        

        // let para = document.querySelectorAll(".para");
        
        // for (let i = 0; i < para.length; i++) {
        //     const letters = para[i];   
        //     if (icon.classList.contains("icon-dark-mode")){
        //         letters.style.color = "white";
        //     }
        // }

    const anotherLi = document.createElement("li");
    anotherLi.setAttribute("class", "list-item");
    anotherLi.innerHTML = newLi.innerHTML;

    anotherLi.children[2].firstElementChild.remove();

    activeLists.appendChild(anotherLi);

    getTodo();

    checkedCompleted ();

});



function getTodo() {
    const lists = document.querySelector(".lists");


    let deleteBtn = lists.querySelectorAll(".cancel");
    let tagLi = lists.getElementsByTagName("li");
    

    for(let i = 0; i < tagLi.length; i++) {

        deleteTodo(tagLi[i], i);
    }   

    let anotherActiveLi = activeLists.getElementsByTagName("li"); 

    for(let i = 0; i < anotherActiveLi.length; i++) {

        deleteTodo(anotherActiveLi[i], i);
    } 
    
}

function deleteTodo(item, idx) {
   

    if(!item)  return;

    

    let tagLi = lists.getElementsByTagName("li");
    let deleteBtn = lists.querySelectorAll(".cancel");

    let anotherActiveLi = activeLists.getElementsByTagName("li");

    for (let i = 0; i < anotherActiveLi.length; i++)

    for (let i = 0; i <tagLi.length; i++) {
        deleteBtn[i].addEventListener("click", (e) => {
            // e.stopImmediatePropagation();  
            if(i === idx) {
                item.remove();
                activeLists.anotherActiveLi--;
                // count.innerHTML--;
            }
        });

    } 
}


function checkedCompleted() {
    let myList = lists.querySelectorAll(".checkbox");
    let listItems = document.querySelectorAll(".list-item");

    let activeListItems = activeLists.querySelectorAll(".list-item");


    for (let i = 0; i < activeListItems.length; i++) {
    }

    for (let i = 0; i < myList.length; i++) {
        myList[i].addEventListener("click", (e) => {

            if (listItems[i].children[0].firstElementChild.classList.contains("checkbox")) {
                listItems[i].children[1].firstElementChild.classList.replace("para", "text");
               
                let elem = listItems[i].cloneNode(true);
                e.stopImmediatePropagation()
                elem.children[2].firstElementChild.remove();
                elem.children[1].firstElementChild.classList.replace("text", "para");
                completeList.appendChild(elem);
                
                activeListItems[i].remove();
                activeLists.activeListItems--;

                count.innerHTML--;
                
                
            }
          
        })
        
    }
}

const clearCompleted = document.querySelector(".btn");

clearCompleted.addEventListener("click", () => completeList.innerHTML = "")