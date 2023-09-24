function validateForm() {
    var returnval = true;
    clearErrors();

    var email = document.forms['myForm']["femail"].value;
        if(email.length > 15){
        seterror("email","* Email is to Long");
        returnval = false;
    }

    var password = document.forms['myForm']["fpassword"].value;

    if(password.length<8){
        seterror("password","* Password should be more than 6 characters");
        returnval = false;
    }
    // var lowercase = /[a-z]/g;
    // var uppercase =/[A-Z]/g;
    // var number=/[0-9]/g;

    // if(pass.match(lowercase).length<=8){
    //  seterror("password","* pls enter ur password with including lowercase, uppercase,number or atlest 8 ch long.");
    //    returnval = false; 
    // }

    return returnval;
}

function validateForm2() {
    var returnval = true;
    clearErrors();

    var semail = document.forms['myForm2']["sname"].value;
        if(semail.length > 15){
        seterror("semail","* Email is to Long");
        returnval = false;
    }

    return returnval;
}

function validateForm3() {
    var returnval = true;
    clearErrors();

    var remail = document.forms['myForm3']["remail"].value;
        if(remail.length > 15){
        seterror("remail","* Email is to Long");
        returnval = false;
    }

    return returnval;
}

function clearErrors(){
    errors = document.getElementsByClassName("formerror")

    for(let a of errors){
        a.innerHTML= ""
    }
}

function seterror(id,error) {
    element = document.getElementById(id)
    element.getElementsByClassName("formerror")[0].innerHTML = error
}