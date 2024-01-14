const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

// function myFunction() {
//     if (password.type === "password") {
//       password.type = "text";
//     } else {
//       password.type = "password";
//     }
// }

let success = true

form.addEventListener('submit', (e) => {
       
    if (!validateInput()){
        e.preventDefault();
    }else{
        e.preventDefault();
        alert('submited')
    }
})


function validateInput(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()

    //username
    if(usernameVal === ''){
        success = false
        setError(username,'Username is required') 
    }else{
        setSuccess(username)
    }

    //email
    if(emailVal === ''){
        success = false
        setError(email,'email is required')
    }else if(!validateEmail(emailVal)){
        setError(email,'Enter the valid email')
    }else{
        setSuccess(email)
    }

    //password
    if(passwordVal === ''){
        success = false
        setError(password,'password is required')
    }else if(passwordVal.length < 8){
        setError(password,'password must be greater than 8')
    }else{
        setSuccess(password)
    }

    //confirm password
    if(cpasswordVal === ''){
        success = false
        setError(cpassword,'confirm password is required')
    }else if(cpasswordVal !== passwordVal){
        setError(cpassword,'password is not matching')
    }else{
        setSuccess(cpassword)
    }

    return success
}


function setSuccess(element){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = ''

    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
// setting error finding the input group through this parentElement
function setError(element , message){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerHTML = message

    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}



const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};