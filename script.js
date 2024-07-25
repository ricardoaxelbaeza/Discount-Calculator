
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

    submitButton.addEventListener("click",(e)=>{
        e.preventDefault();
        const discountedPrice = calculateDiscount(priceInput,percentInput);
        // savedMessage.classList.toggle("hidden");
    
    });
 
    //Checks input typed (does not allow letters to be typed in)
    function checkInput(input){

        let inputText = input.value;
        //TODO: Only allow one decimal for input
        var regex  = /[a-zA-Z]|!|@|#|\$|%|\^|&|\*|-|_|\+|=|{|\[|}|]|:|;|"|'|<|,|\?|<|,|>|\/|`|~|\(|\)/g;
        let restrictedText = inputText.replace(regex,'');

        input.value = restrictedText;

    }

}
    