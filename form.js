
const MyForm = document.getElementById("myForm")

MyForm.addEventListener("submit", function(event){
    event.preventDefault();

    // const fnameInput = document.getElementById('fname')
    // const emailInput = document.getElementById('email')

    // const fnameValue = fnameInput.value
    // const emailValue = emailInput.value

    // console.log(fnameValue)
    // console.log(emailValue)

    // ===========================================================

    // const fname = document.getElementById('fname').value;
    // const email = document.getElementById('email').value;

    // console.log(fname)
    // console.log(email)

    // ===========================================================


    const formData = new FormData(MyForm)
    console.log("First Name: ", formData.get("fname"))
    console.log("Email: ", formData.get("email"))

})