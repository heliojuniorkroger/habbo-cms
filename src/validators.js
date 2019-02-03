import emailValidator from 'email-validator'

const required = value => {
    if (!value) return 'Este campo é obrigatório.'
}

const passwordsMatch = (value, allValues) => {
    if (value !== allValues.passwordNew) return 'As senhas não conferem.'
}

const email = value => {
    if (!emailValidator.validate(value)) return 'Você precisa fornecer um e-mail válido.'
}

export {
    required,
    passwordsMatch,
    email
}