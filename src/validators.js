import emailValidator from 'email-validator'
import zxcvbn from 'zxcvbn'

const required = value => {
    if (!value) return 'Este campo é obrigatório.'
}

const password = value => {
    if (zxcvbn(value).score === 0) return 'Password strength failed.'
}

const passwordsMatch = (value, allValues) => {
    if (value !== allValues.passwordNew) return 'As senhas não conferem.'
}

const email = value => {
    if (!emailValidator.validate(value)) return 'Você precisa fornecer um e-mail válido.'
}

export {
    required,
    password,
    passwordsMatch,
    email
}