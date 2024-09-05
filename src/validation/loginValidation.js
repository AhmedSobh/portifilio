function Validation(values) {
    let error = {}
    const email_Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_Pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
        error.email = "Email should not be empty"
    }
    else if(!email_Pattern.test(values.email)){
        error.email = "Invalid email address"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    } else if(!password_Pattern.test(values.password)){
        error.password = "Password should have [a-z], [A-Z], and [0-9]"
    } else {
        error.password = ""
    }
    return error;
}

export default Validation;