
window.onload = () => {
    const inputForm = document.getElementById("input-form");

    const priceInput = document.getElementById("price-input");
    const percentInput = document.getElementById("percent-input");
    const priceInputContainer = document.getElementById("price-input-container");
    const percentInputContainer = document.getElementById("percent-input-container");

    
    const submitButton = document.getElementById("submit-form-btn");
    const clearFormButton = document.getElementById("clear-form-btn");

    const discountDataDiv = document.getElementById("discount-data");



    priceInput.addEventListener("input",()=>{
        preventSpecialChars(priceInput,priceInputContainer);
        //TODO: store input into local storage
    });

    percentInput.addEventListener("input",()=>{
        preventSpecialChars(percentInput,percentInputContainer);
        //TODO: store input into local storage
    });



    clearFormButton.addEventListener("click",()=>{
        priceInput.value="";
        percentInput.value="";
        discountDataDiv.innerHTML=``;
        priceInputContainer.style.border = " solid 1px transparent";
        percentInputContainer.style.border = " solid 1px transparent";
    });

    submitButton.addEventListener("click",(e)=>{

            //checks for required fields before submission, bc without if stmt prevent default in "else" does not check required fields
            if(priceInput.checkValidity()===false){
                priceInput.reportValidity();
            }else if (percentInput.checkValidity()===false) {
                percentInput.reportValidity();
            } else {

                e.preventDefault(); //prevents refresh
        
        
                const ogPrice = getOGPrice(priceInput); //gets OG Price as a number (not string)
                const discountedPrice = calculateDiscount(priceInput,percentInput);
                const amtSaved = calculateAmtSaved(ogPrice, discountedPrice);
                const isNum = verifyIfNum(discountedPrice);
        
                if(isNum){
                    displayDiscountedPrice(discountedPrice,amtSaved);
                }
        
                
            }

               
            
        
        //TODO: Display Amount Saved in Text on HTML DOC & Display Other Messages as needed (e.g. NaN)
        //      Catch Errors, account for NaN
    });
 
    //Checks input typed (does not allow letters to be typed in)
    function preventSpecialChars(input,inputContainer){

        let inputText = input.value;
       
        
        //TODO: Only allow one decimal for input 
        let regex  = /[a-zA-Z]|!|@|#|\$|%|\^|&|\*|-|_|\+|=|{|\[|}|]|:|;|"|'|<|,|\?|<|,|>|\/|`|~|\(|\)|\'|\s/g;
        if(regex.test(inputText)){


            inputContainer.style.border = "solid 1px red";
        }else{
            inputContainer.style.border = " solid 1px transparent";
        }
        let restrictedText = inputText.replace(regex,'');

       

        input.value = restrictedText;

    }

    function calculateDiscount(price,percent){

        return parseFloat((price.value - (price.value * (percent.value/100)))).toFixed(2); //parse float rounds up calculation to two decimals
           
    }

    function calculateAmtSaved(ogPrice,discountPrice){
        return parseFloat(ogPrice - discountPrice).toFixed(2);
    }

    function getOGPrice(ogPrice){
        
        const ogPriceasFloat = parseFloat((ogPrice.value)).toFixed(2);
        return ogPriceasFloat;
    }

    function verifyIfNum(discountPriceNum){
        if(isNaN(discountPriceNum)){
            return false;
        }else{
            return true;
        }
    }

    function displayDiscountedPrice(discountedPrice,amtSaved){

        discountDataDiv.innerHTML = `
            <p>Discount Price: $${discountedPrice}</p>
            <p>You Saved: $${amtSaved}</p>
        `;
    }

}
    