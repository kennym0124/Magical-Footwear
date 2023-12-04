const cssSelector = "input[type=text], input[type=number]";
const fields = document.querySelectorAll(cssSelector);
const form = document.getElementById('form'); 
const message = document.getElementById('message');

document.getElementById('form').onsubmit = function(e) {
    let error = 0;
    for (let field of fields) {
        if (!field.value) {
            error = 1;
            alert("Please enter your " + field.name);
            field.style.backgroundColor = "#FFCCCB";
        }
    }
    if (error == 0) {
        alert("Order Confirmed! Please check your email for shipping details and a payment invoice. Thank you for your purchase!");
        window.location.href = "index.html";
        return false;
    }
    return false;
};

