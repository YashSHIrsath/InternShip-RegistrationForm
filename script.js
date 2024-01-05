function seterror(id,error){
    element1 = document.getElementById(id);
    element1.getElementsByClassName('formerror')[0].innerHTML = error;
}

function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function validateForm(){
    var password1 =  document.forms['myForm']['fpassword'].value;
    
    const hasCapitalLetter = /[A-Z]/.test(password1);
    const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password1);
    const hasNumber = /[0-9]/.test(password1);
    var returnVal = true;
    clearErrors();
    var email = document.forms['myForm']['femail'].value;
    if(email.length>40)
    {
        seterror('email','*Email length is too long*');
        returnVal = false;
    }

    var password = document.forms['myForm']['fpassword'].value;
    if(password.length<6)
    {
        seterror('password','*Password is too short(atleast 6 letters)*');
        returnVal = false;
    }
    if (!hasCapitalLetter || !hasSymbol || !hasNumber) {
        seterror('password','*Password must have atleast 1 symbol ,a Capital letter and a Number.*');
        console.log(password1)
        returnVal = false; 
    }
    return returnVal;
}
