const percentDropDownMenu = document.getElementById("percent-select");




percentDropDownMenu.addEventListener('change',()=>{
    percentInput.value = percentDropDownMenu.value;
});





