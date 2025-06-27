


fetch("data.json")
.then(response => response.json())
.then(data => {
    console.log(data)
})

const changeBgButton = document.getElementById("change-bgDark");
const bodyId = document.getElementById("body");
const changeBgLight = document.getElementById("change-bgLight");
const header = document.getElementById("header");
const titleOptions = document.getElementById("titleOptions")



function changeBackgroundToLight(){
    changeBgLight.classList.toggle("hidden")
    changeBgButton.classList.toggle("hidden");
    bodyId.classList.replace("from-darkZero", "from-lightZero")
    bodyId.classList.replace("to-darkhundred", "to-lighthundred");
    header.classList.replace("bg-neutral700", "bg-white");
    titleOptions.classList.replace("text-neutral0", "text-neutral900")
}

function changeBackgroundToDark(){
    changeBgLight.classList.toggle("hidden")
    changeBgButton.classList.toggle("hidden");
    bodyId.classList.replace("from-lightZero", "from-darkZero")
    bodyId.classList.replace("to-lighthundred", "to-darkhundred");
     header.classList.replace("bg-white", "bg-neutral700")
     titleOptions.classList.replace("text-neutral900", "text-neutral0");
}







changeBgLight.addEventListener("click", changeBackgroundToDark);
changeBgButton.addEventListener("click", changeBackgroundToLight);