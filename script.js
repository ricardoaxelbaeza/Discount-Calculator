
window.onload = () => {
    const inputForm = document.getElementById("input-form");
    const priceInput = document.getElementById("price-input");
    const percentInput = document.getElementById("percent-input");
    const savedMessage = document.getElementById("saved-msg");
    const submitButton = document.getElementById("submit-form-btn");

    priceInput.addEventListener("input",()=>{
        verifyInput(priceInput);
    });

    percentInput.addEventListener("input",()=>{
        verifyInput(percentInput);
    });


}

    