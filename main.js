const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const submit = document.querySelector('#submit')


submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputs();
})

const checkInputs = () => {
    const lastNameValue = lastName.value.trim()
    const firstNameValue = firstName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(firstNameValue  === ""){
        setErrorFor(firstName, 'First Name cannot be empty')
    }else {
        firstName.parentElement.classList.remove('error')
    }

    if(lastNameValue === ""){
        setErrorFor(lastName, 'Last Name cannot be empty')
    }else {
        lastName.parentElement.classList.remove('error')
    }

    if(emailValue === ""){
        setErrorFor(email, 'Email cannot be empty')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Looks like this is not a email')
    }else {
        email.parentElement.classList.remove('error')
    }

    if(passwordValue === ""){
        setErrorFor(password, 'Password cannot be empty')
    }else {
        password.parentElement.classList.remove('error')
    }
}

const setErrorFor = (input, messagge) => {
    const formControl = input.parentElement;
    formControl.classList.add("error");
    
    const small = formControl.querySelector('small');
    small.innerText = messagge;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}