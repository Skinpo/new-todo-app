const icon = document.querySelector(".icon-light-mode");
const iconDark = document.querySelector(".icon-dark-mode");
const header = document.querySelector(".header-light-mode");
const allItems = document.querySelector(".none");
// const acvtiveItems = document.querySelector(".active-todo-items");
const completedItems = document.querySelector(".completed-todo-items");
const inputField = document.querySelector(".inpute");
const para = document.querySelectorAll(".para");
const inputBtn = document.querySelector(".input-btn");


icon.addEventListener("click", () => {
    if (icon.classList.contains("icon-light-mode")){
        icon.classList.replace("icon-light-mode", "icon-dark-mode")
        iconDark.style.visibility = "visible",
        header.src = "../images/bg-desktop-dark.jpg"
        document.body.style.backgroundColor = "#161722"
    
        const dark = document.querySelectorAll(".dark");
        for (let i = 0; i < dark.length; i++) {
            dark[i].style.backgroundColor = "#25273c"    
        }
        
        const main = document.querySelector(".main");
        main.style.backgroundColor = "#161722"

        // for (let i = 0; i < para.length; i++) {
        //     para[i].style.color = "white"
        // }      
        
        let para = document.querySelectorAll(".para");
        for (let i = 0; i < para.length; i++) {
            const letters = para[i];
        letters.style.color = "white";}
    }

})

iconDark.addEventListener("click", () => {
    if (icon.classList.contains("icon-dark-mode")){
        icon.classList.replace("icon-dark-mode", "icon-light-mode")
        iconDark.style.visibility = "hidden"
        header.src = "../images/bg-desktop-light.jpg"
        document.body.style.backgroundColor = "white"
    
        const dark = document.querySelectorAll(".dark");
        for (let i = 0; i < dark.length; i++) {
            dark[i].style.backgroundColor = "white"    
        }
        const main = document.querySelector(".main");
        main.style.backgroundColor = "white"
        
        // for (let i = 0; i < para.length; i++) {
        //     para[i].style.color = "#484b6a"
        // }

        let para = document.querySelectorAll(".para");
        for (let i = 0; i < para.length; i++) {
            const letters = para[i];
        letters.style.color = "#484b6a";}
    }

})



inputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(inputField.value === '') {
        return window.alert("input field cannot be empty");
    }

    let d = new Date();
    let id = document.createElement("id");
    id = d.getMilliseconds();
    console.log(id);

    const lists = document.querySelector(".lists");
    const newLi = document.createElement("li");
    const hr = document.createElement("hr");
    newLi.setAttribute("class", "list-item");
    newLi.setAttribute("id", `${id}-li`);

    newLi.innerHTML = `
    <div class="cbox">
        <input type="checkbox" class="checkbox">
        </div>
        <div class="par">
        <p class="para">${inputField.value}</p>
        </div>
        <div class="img">
        <img src="../images/icon-cross.svg" class="cancel" >
        </div>
`

        // console.log(newLi);
        lists.appendChild(newLi);
        // lists.appendChild(hr);
        allItems.appendChild(lists);
        inputField.value = "";

        let para = document.querySelectorAll(".para");
        for (let i = 0; i < para.length; i++) {
            const letters = para[i];   
            if (icon.classList.contains("icon-dark-mode")){
                letters.style.color = "white";
            }
        }
    

    const activeLists = document.querySelector(".active-lists");
    const anotherLi = document.createElement("li");
    anotherLi.setAttribute("class", "list-item");
    // const anotherHr = document.createElement("hr");
    anotherLi.innerHTML = newLi.innerHTML;

    activeLists.appendChild(anotherLi);
    // activeLists.appendChild(anotherHr);
    // acvtiveItems.appendChild(activeLists);

    getTodo();

    checkedCompleted ();

    getActiveTodo();

    // checkedActiveCompleted ();

});



function getTodo() {
    const lists = document.querySelector(".lists");

    // let checkedPass = lists.querySelectorAll(".pass");
    let deleteBtn = lists.querySelectorAll(".cancel");
    let tagLi = lists.getElementsByTagName("li");
    // let checkBox = lists.querySelectorAll(".checkbox");

    for(let i = 0; i < tagLi.length; i++) {

        deleteTodo(tagLi[i], i);
    }   
    
}

function deleteTodo(item, idx) {
    const lists = document.querySelector(".lists");

    if(!item)  return;

    let tagLi = lists.getElementsByTagName("li");
    let deleteBtn = lists.querySelectorAll(".cancel");

    for (let i = 0; i <tagLi.length; i++) {
        deleteBtn[i].addEventListener("click", () => {
            if(i === idx) {
                item.remove();
            }
        });

    } 
}

function getActiveTodo() {
    const activeLists = document.querySelector(".active-lists");

    let delet = activeLists.querySelectorAll(".cancel");
    let anotherActiveLi = activeLists.getElementsByTagName("li"); 

    for(let i = 0; i < anotherActiveLi.length; i++) {

        deleteActiveTodo(anotherActiveLi[i], i);
    } 

    
}


function deleteActiveTodo(item, idx) {
    const activeLists = document.querySelector(".active-lists");

    if(!item)  return;

    let anotherActiveLi = activeLists.getElementsByTagName("li");
    let delet = activeLists.querySelectorAll(".cancel");

    for (let i = 0; i <anotherActiveLi.length; i++) {
        delet[i].addEventListener("click", () => {
            if(i === idx) {
                item.remove();
            }
        });

    } 
}

function checkedCompleted() {
    const lists = document.querySelector(".lists");
    let myList = lists.querySelectorAll(".checkbox");
    let listItems = document.querySelectorAll(".list-item");

    const activeLists = document.querySelector(".active-lists");
    let activeListItems = activeLists.querySelectorAll(".list-item")

    for (let i = 0; i < activeListItems.length; i++) {
    }

    for (let i = 0; i < myList.length; i++) {
        myList[i].addEventListener("click", () => {
            // let activeListItems[i] = listItems[i] 
            // console.log(listItems[i].children[0].firstElementChild);
            if (listItems[i].children[0].firstElementChild.classList.contains("checkbox")) {
                listItems[i].children[1].firstElementChild.classList.replace("para", "text")
                activeListItems[i].remove();
                activeLists.activeListItems--;
            }

            if (icon.classList.contains("icon-dark-mode")) {
                let para = document.querySelectorAll(".para");
                for (let i = 0; i < para.length; i++) {
                const letters = para[i];
                letters.style.color = "#6c6e85";}
            } 


            
        })
        
    }
}




/**
 














icon.addEventListener("click", () => {
    if (icon.classList.contains("icon-light-mode")){
        icon.classList.replace("icon-light-mode", "icon-dark-mode")
        iconDark.style.visibility = "visible",
        header.src = "../images/bg-desktop-dark.jpg"
        document.body.style.backgroundColor = "#161722"
    
        const dark = document.querySelectorAll(".dark");
        for (let i = 0; i < dark.length; i++) {
            dark[i].style.backgroundColor = "#25273c"    
        }
        
        const main = document.querySelector(".main");
        main.style.backgroundColor = "#161722"

        for (let i = 0; i < para.length; i++) {
            para[i].style.color = "white"
        }
        
    }

})

iconDark.addEventListener("click", () => {
    if (icon.classList.contains("icon-dark-mode")){
        icon.classList.replace("icon-dark-mode", "icon-light-mode")
        iconDark.style.visibility = "hidden"
        header.src = "../images/bg-desktop-light.jpg"
        document.body.style.backgroundColor = "white"
    
        const dark = document.querySelectorAll(".dark");
        for (let i = 0; i < dark.length; i++) {
            dark[i].style.backgroundColor = "white"    
        }
        const main = document.querySelector(".main");
        main.style.backgroundColor = "white"
        
        for (let i = 0; i < para.length; i++) {
            para[i].style.color = "#484b6a"
        }
    }

})



inputBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(inputField.value === '') {
        return window.alert("input field cannot be empty");
    }

        let d = new Date();
        let id = document.createElement("id");
        id = d.getMilliseconds();
        // console.log(id);

        let newLi = document.createElement("li"); 
        newLi.setAttribute("class", "list-item");

        newLi.setAttribute("id", `${id}-li`);  

        newLi = `
        <div class="cbox">
        <input type="checkbox" class="checkbox dark">
        </div>
        <div class="par">
        <p class="para">${inputField.value}</p>
        </div>
        <div class="img">
        <img src="../images/icon-cross.svg" class="cancel" >
        </div>
        `

        lists.appendChild(newLi);
        // lists.appendChild(hr);
        // allItems.appendChild(lists);
        // inputField.value = "";


         // const checkBox = document.querySelector(".checkbox")
    // for (let i = 0; i < checkBox.length; i++) {
    //     checkBox[i].addEventListener("click", () => {
    //     let c = new Date();
    //     let id = document.createElement("id");
    //     id = c.getMilliseconds();
    //     console.log(id, "yes");
    //     })
        
    // }
})

 **/





