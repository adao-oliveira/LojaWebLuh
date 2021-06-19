const valid = (name, email, password, cf_password) => {
    if(!name || !email || !password)
    return 'Adicione todos os campos.'

    if(!validateEmail(email))
    return 'E-mail inválido.'

    if(password.length < 6)
    return 'A senha deve ter pelo menos 6 caracteres.'

    if(password !== cf_password)
    return 'A senha de confirmação não corresponde.'
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid