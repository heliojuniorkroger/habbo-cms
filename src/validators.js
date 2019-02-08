import emailValidator from 'email-validator'
import passwordStrength from 'password-strength'

const required = value => {
    if (!value) return 'Este campo é obrigatório.'
}

const password = value => {
    if (passwordStrength(value).strength === 'simple') return 'Password strength failed.'
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