
window.onload = () => {
    const inputForm = document.getElementById("input-form");
    const priceInput = document.getElementById("price-input");
    const percentInput = document.getElementById("percent-input");
    const savedMessage = document.getElementById("saved-msg");
    const submitButton = document.getElementById("submit-form-btn");

    priceInput.addEventListener("input",()=>{
        checkInput(priceInput);
    });

    percentInput.addEventListener("input",()=>{
        checkInput(percentInput);
    });




 
    //Checks input typed (does not allow letters to be typed in)
    function checkInput(input){
        console.log("in the verify funct");
        
        let inputArr = input.value.split('');
   
        for(let i = 0; i < inputArr.length; i++){
            let currentInputArrChar = inputArr.at(i).charCodeAt();
            if(currentInputArrChar >=97 && currentInputArrChar <=122){
                inputArr.splice(i);
                let tempArr = inputArr.join('');
                input.value = tempArr;
            }
        }

    }}
    