// the function to chexk of email validation
function validation (){
    // set the main vaeiable we need
    let email =document.getElementById("email").value;
    let label=document.querySelector(".errorLabel")
    // the pattern of the correct email 
    let regx=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    // check if the input of the user is valid?
    if(regx.test(email)){
        label.classList.add("hide")
        document.getElementById("email").classList.remove("error")
        document.getElementById("email").value=""
        document.getElementById("email").placeholder="Your email address..."
        // if the email is not valid
    }else{
        label.classList.remove("hide")
        document.getElementById("email").classList.add("error")
        document.getElementById("email").placeholder="example@email/com"
    }
}