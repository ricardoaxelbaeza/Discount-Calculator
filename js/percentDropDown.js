
const percentDropDownMenu = document.getElementById("percent-select");

const option0 = document.getElementById("option-0");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");

percentDropDownMenu.addEventListener('change',()=>{
    percentInput.value = percentDropDownMenu.value;
});





