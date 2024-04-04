const inputEmail = document.getElementById('emailInput');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function activateButton(){
    if(inputEmail.value === '' && !emailRegex.test(inputEmail.value)){
        inputEmail.value = "Enter a valid email address";
    }
    else{
        window.location.assign('./index2.html');
    }
   
}