
priceInput.addEventListener("input",()=>{
    preventSpecialChars(priceInput,priceInputContainer);
    //TODO: store input into local storage
});

percentInput.addEventListener("input",()=>{
    // preventSpecialChars(percentInput,percentInputContainer);
    submitAnimation(priceInput,percentInput,submitButton);
    dropMenuValueCheck();
    //TODO: store input into local storage
});


function submitAnimation(priceInput,percentInput,submitButton){
       
    if(priceInput.value !== "" && percentInput.value >= 5){
     const ogBtnWidth = submitButton.style.width;
     submitButton.style.width = "190px";
     setTimeout(() => {  submitButton.style.width = ogBtnWidth; }, 500);
    }
 }

 //Checks input typed (does not allow letters to be typed in)
 function preventSpecialChars(input,inputContainer){

    let inputText = input.value;
   
    
    //TODO: Only allow one decimal for input 
    let regex  = /[a-zA-Z]|!|@|#|\$|%|\^|&|\*|-|_|\+|=|{|\[|}|]|:|;|"|'|<|,|\?|<|,|>|\/|`|~|\(|\)|\'|\s|\"|\`/g;
    if(isNaN(inputText)){


        inputContainer.style.border = "solid 2px red";
    }else{
        inputContainer.style.border = " solid 2px transparent";
    }
    let restrictedText = inputText.replace(regex,'');

   

    input.value = restrictedText;

}

function dropMenuValueCheck(){
    if(percentDropDownMenu.value !== percentInput.value){
        percentDropDownMenu.value = "";
    }
}