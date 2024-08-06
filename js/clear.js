const clearFormButton = document.getElementById("clear-form-btn");


clearFormButton.addEventListener("click",()=>{
    priceInput.value="";
    percentInput.value="";
    discountDataDiv.innerHTML=``;
    priceInputContainer.style.border = " solid 2px transparent";
    percentInputContainer.style.border = " solid 2px transparent";
    discountDataDiv.style.backgroundColor = "";
});