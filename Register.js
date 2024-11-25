const form = document.getElementById('register-form');

const name = document.getElementById('name');
const region = document.getElementById('region');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const agree = document.getElementById('terms');

const error = document.getElementById('error');

form.addEventListener('submit', function(e){
    e.preventDefault(); //prevent submit form from refreshing

    error.innerHTML = '';
    if(!name.value) {
        error.innerHTML += '<li>Username is empty!</li>';
    }

    if(name.value.length > 20) {
        error.innerHTML += '<li>Username must consist of max 20 characters</li>';
    }
    
    if(!email.value) {
        error.innerHTML += '<li>E-mail is empty!</li>';
    }

    if(!password.value) {
        error.innerHTML += '<li>Password is empty!</li>';
    }

    if(!confirm.value) {
        error.innerHTML += '<li>Confirm password is empty!</li>';
    }

    if(password.value != confirm.value) {
        error.innerHTML += '<li>Confirm password is incorrect</li>'; 
    }

    if(agree.checked == false) {
        error.innerHTML += '<li>You must agree to our Terms of Service</li>';
    }

    console.log('Name: '+ name.value);
    console.log('Region: '+ region.value);
    console.log('E-mail: '+ email.value);
    console.log('Password: '+ password.value);
    console.log('Confirm: '+ confirm.value);
    console.log('Agreed: '+ terms.checked);
})
