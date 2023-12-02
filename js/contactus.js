const cssSelector = "input[type=text],input[type=password],input[type=email],input[type=tel]";
const fields = document.querySelectorAll(cssSelector);
const form = document.getElementById('form'); 
const message = document.getElementById('message');

form.addEventListener('submit', (e) =>{  
    let error = 0;             
    for(let field of fields){
        if(!field.value){
            error = 1;
            e.preventDefault();
            alert("Please enter your " + field.id);
            field.style.backgroundColor = "#FFCCCB";
        }
        else if(field.id === 'name'){
            let capital = document.getElementById(field.id);
            capital.value = document.getElementById(field.id).value.charAt(0).toUpperCase() + capital.value.slice(1);
        }
        else if(field.id === 'phone'){
            let phoneNumber = document.getElementById(field.id).value;
            var phoneFormat = new RegExp("^\\d{3}(-)?\\d{3}(-)?\\d{4}$");
            let result = phoneFormat.test(phoneNumber);
            
            if(!result){
                error = 1;
                e.preventDefault();
                field.style.backgroundColor = "#FFCCCB";
                alert("Please enter a valid phone number");
            }
        }
    }
    if(!message.value){
        e.preventDefault();
        alert("Please enter a message.");
        message.style.backgroundColor = "#FFCCCB";
    }
})