let nameElement = document.getElementById("name");
let colorInput = document.getElementById("colorInput");

function changeNameColor() {
    nameElement.style.color = colorInput.value;
    //nameElement.innerText = "Hello " + colorInput.value;
}

colorInput.addEventListener("input", changeNameColor);
