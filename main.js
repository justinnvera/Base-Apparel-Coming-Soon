let errorMessage = document.querySelector(".error-message");
let errorImage = document.querySelector(".error-image");
let emailButton = document.querySelector(".email-button");
let emailInput = document.querySelector(".email-input");


function validateEmail () {
    var regex = /\S+@\S+\.\S+/;
    let result = regex.test(emailInput.value);
    if (result === false) {
        errorMessage.style.visibility = "visible";
        errorImage.style.visibility = "visible";
    } else {
        errorMessage.style.visibility = "hidden";
        errorImage.style.visibility = "hidden";
    }
    console.log(result);
}
