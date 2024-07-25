
window.onload = () => {
    const inputForm = document.getElementById("input-form");
    const priceInput = document.getElementById("price-input");
    const percentInput = document.getElementById("percent-input");
    const submitButton = document.getElementById("submit-form-btn");

    const discountDataDiv = document.getElementById("discount-data");

    priceInput.addEventListener("input",()=>{
        preventSpecialChars(priceInput);
        //TODO: store input into local storage
    });

    percentInput.addEventListener("input",()=>{
        preventSpecialChars(percentInput);
        //TODO: store input into local storage
    });

    submitButton.addEventListener("click",(e)=>{
        e.preventDefault();
        const ogPrice = getOGPrice(priceInput); //gets OG Price as a number (not string)
        
        const discountedPrice = calculateDiscount(priceInput,percentInput);
        const amtSaved = calculateAmtSaved(ogPrice, discountedPrice);
        
        
        const isNum = verifyIfNum(discountedPrice);

        if(isNum){
            displayDiscountedPrice(discountedPrice,amtSaved);

        }
        //TODO: Display Amount Saved in Text on HTML DOC & Display Other Messages as needed (e.g. NaN)
        //      Catch Errors, account for NaN
    });
 
    //Checks input typed (does not allow letters to be typed in)
    function preventSpecialChars(input){

        let inputText = input.value;
        
        //TODO: Only allow one decimal for input 
        var regex  = /[a-zA-Z]|!|@|#|\$|%|\^|&|\*|-|_|\+|=|{|\[|}|]|:|;|"|'|<|,|\?|<|,|>|\/|`|~|\(|\)/g;
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
    