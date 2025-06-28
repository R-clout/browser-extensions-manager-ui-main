const changeBgButton = document.getElementById("change-bgDark");
const bodyId = document.getElementById("body");
const changeBgLight = document.getElementById("change-bgLight");
const header = document.getElementById("header");
const titleOptions = document.getElementById("titleOptions")
const itemsList = document.getElementById("items-list");

fetch("data.json")
.then(response => response.json())
.then(data => {
    data.forEach(items => {
        console.log(items)
        itemsList.innerHTML += ` <li class="border flex flex-col gap-4 p-2 bg-neutral700 rounded-xl border-neutral600 my-4">
        <div class="flex gap-4 items-start ">
          <img src="${items.logo}" alt="dev-lens">
          <div class="text-neutral0">
            <h2 class="text-xl">${items.name}</h2>
            <p>${items.description}</p>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <button class="text-neutral0 bg-neutral800 p-2 rounded-xl">Remove</button>
          <label for="check" class="bg-gray-100 w-11 h-6 rounded-full relative">
            <input type="checkbox" id="check" class="sr-only peer" />
            <span
              class="w-2/5 h-4/5 bg-rose-300 rounded-full absolute left-0.5 top-0.5 peer-checked:bg-rose-600 peer-checked:left-6"></span>
          </label>
        </div>
      </li>` 
    })
})

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