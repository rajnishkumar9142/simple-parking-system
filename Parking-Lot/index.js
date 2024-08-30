const form = document.querySelector("form");
const dialog = document.querySelector(".dialog");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameValue = form.name.value;
    let phoneValue = form.phone.value;
    let emailValue = form.email.value;
    let isEmpty = (nameValue || phoneValue || emailValue) === '';

    if (!isEmpty) {
        validateName(nameValue);
        validatePhone(phoneValue);
        validdateMail(emailValue);

        if (validateName(nameValue) && validatePhone(phoneValue) && validdateMail(emailValue))
            location.href = "./welcome.html";
    } else {

        dialog.style.display = "block";
    }

});


//name validator
function validateName(name) {
    if (/^[a-zA-Z\-]+$/.test(name)) {
        displayError("#name_error", "none");
        return true;
    } else {
        displayError("#name_error", "block");
        return false;
    }
}

//phone number validator
function validatePhone(phone) {
    if (/^\d{10}$/.test(phone)) {
        displayError("#phone_error", "none");
        return true;
    } else {

        displayError("#phone_error", "block");
        return false;
    }
}

//email  validator
function validdateMail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        displayError("#email_error", "none");
        return true;
    } else {

        displayError("#email_error", "block");
        return false;
    }
}


function displayError(elementId, elementProperty) {
    return form.querySelector(elementId).style.display = elementProperty;
}