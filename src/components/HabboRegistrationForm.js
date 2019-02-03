import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Recaptcha from 'react-grecaptcha'
import { required, passwordsMatch, email } from '../validators'
import userActions from '../actions/userActions'
import { FACEBOOK_APP_ID, RECAPTCHA_KEY, API_URL } from '../config'

const renderField = props => {
    const showError = props.meta.touched && props.meta.error
    let popoverError
    let toggleMask
    if (showError) popoverError = (
        <div className="form__popover form__popover--error">
            <div>{props.meta.error}</div>
        </div>
    )
    if (props.showToggleMask) toggleMask = (
        <i onClick={props.toggleMaskFn} className={`password-toggle-mask__icon ${props.type === 'text' ? 'active' : ''}`}></i>
    )
    return (
        <fieldset className={`form__fieldset ${props.extraClass}`}>
            <label htmlFor={props.id} className="form__label">{props.label}</label>
            <p>{props.helper}</p>
            <div className="form__field">
                <input {...props.input} id={props.id} type={props.type} autoComplete="off" className={`form__input ${showError ? 'ng-invalid' : ''}`} />
                {toggleMask}
                {popoverError}
            </div>
        </fieldset>
    )
}

const renderCheckbox = props => {
    let popoverError
    if (props.meta.touched && props.meta.error) popoverError = (
        <div className="form__popover form__popover--error">
            <div>{props.meta.error}</div>
        </div>
    )
    return (
        <div className="form__field">
            <label htmlFor={props.id} className="form__label form__label--checkbox">
                <input {...props.input} id={props.id} type="checkbox" className="form__checkbox" />
                {React.createElement(props.label)}
            </label>
            {popoverError}
        </div>
    )
}

const renderCaptcha = props => {
    let popoverError
    if (props.meta.touched && props.meta.invalid) popoverError = (
        <div className="form__popover form__popover--error">
            <div>Prove que você não é um robô!</div>
        </div>
    )
    return (
        <fieldset className="form__fieldset captcha__wrapper">
            <div className="form__field">
                <Recaptcha
                    sitekey={RECAPTCHA_KEY}
                    className="captcha"
                    locale="pt-BR"
                    expiredCallback={() => null}
                    callback={props.input.onChange}
                />
                {popoverError}
            </div>
        </fieldset>
    )
}

class RegistrationForm extends Component {
    constructor() {
        super()
        this.state = { passwordNewType: 'password', passwordNewRepeatedType: 'password' }
    }
    submit(values) {
        return axios.post(`${API_URL}/authentication/register`, {
            email: values.email,
            password: values.passwordNew
        })
            .then(res => {
                window.sessionStorage.setItem('user', JSON.stringify(res.data))
                this.props.dispatch(userActions.set(res.data))
                this.props.history.push('/hotel')
            })
            .catch(err => {
                if (err.response) {
                    window.grecaptcha.reset()
                    throw new SubmissionError({
                        email: 'O e-mail fornecido já foi utilizado. Se você está tentando criar um novo avatar, faça o login com a sua conta Habbo e crie outro avatar dentro da sua conta.',
                        recaptcha: true
                    })
                }
            })
    }
    fbLogin(user) {
        axios.post(`${API_URL}/authentication/fb`, { userId: user.userId, email: user.email })
            .then(res => {
                window.sessionStorage.setItem('user', JSON.stringify(res.data))
                this.props.dispatch(userActions.set(res.data))
                this.props.history.push('/hotel')
            })
    }
    render() {
        return (
            <habbo-registration-form>
                <h1>Entre agora!</h1>
                <form name="registrationForm" noValidate onSubmit={this.props.handleSubmit(this.submit.bind(this))} className="form form--left registration-form">
                    <div className="registration-form__social__wrapper">
                        <div className="registration-form__social">
                            <h3 className="registration-form__connect">Ou escolha outra forma de registro</h3>
                            <habbo-facebook-connect type="large">
                                <FacebookLogin
                                    appId={FACEBOOK_APP_ID}
                                    fields="email"
                                    callback={user => this.fbLogin(user)}
                                    render={props => <button type="button" onClick={props.onClick} className="facebook-connect">Entre com o Facebook</button>}
                                />
                            </habbo-facebook-connect>
                        </div>
                    </div>
                    <habbo-email-address>
                        <Field
                            id="email"
                            name="email"
                            type="email"
                            label="E-mail"
                            component={renderField}
                            validate={[ required, email ]}
                            helper="Você vai precisar deste endereço de e-mail para realizar o login no Habbo Hotel. Por favor, utilize um endereço de e-mail válido."
                        />
                    </habbo-email-address>
                    <habbo-password-new>
                        <Field
                            id="password-new"
                            name="passwordNew"
                            type={this.state.passwordNewType}
                            label="Senha"
                            extraClass="form__fieldset--box form__fieldset--box-top"
                            component={renderField}
                            validate={required}
                            helper="Utilize, pelo menos, 6 caracteres. Inclua, pelo menos, uma letra, um número e um caracter especial."
                            showToggleMask={true}
                            toggleMaskFn={() => this.setState({ passwordNewType: this.state.passwordNewType === 'password' ? 'text' : 'password' })}
                        />
                        <Field
                            id="password-new-repeated"
                            name="passwordNewRepeated"
                            type={this.state.passwordNewRepeatedType}
                            label="Repita a senha"
                            extraClass="form__fieldset--box form__fieldset--box-bottom"
                            component={renderField}
                            toggleMaskFn={() => this.setState({ passwordNewRepeatedType: this.state.passwordNewRepeatedType === 'password' ? 'text' : 'password' })}
                            showToggleMask={true}
                            hidePopover={true}
                            validate={[ required, passwordsMatch ]}
                        />
                    </habbo-password-new>
                    <habbo-policies>
                        <fieldset className="form__fieldset form__fieldset--box">
                            <Field
                                id="terms-of-service"
                                name="termsOfServiceAccepted"
                                label={() => <span>Eu aceito os <a href="https://help.habbo.com.br/forums/22863963-Termos-e-Condi%C3%A7%C3%B5es-do-Site" rel="noopener noreferrer" target="_blank">Termos e Condições, Política de Privacidade e Política de Cookies</a></span>}
                                component={renderCheckbox}
                                validate={required}
                            />
                            <div className="form__field">
                                <label htmlFor="marketing" className="form__label form__label--checkbox">
                                    <input id="marketing" type="checkbox" className="form__checkbox" />
                                    <span>Mantenha-me atualizado sobre tudo o que está acontecendo no Habbo Hotel!</span>
                                </label>
                            </div>
                        </fieldset>
                    </habbo-policies>
                    <habbo-captcha>
                        <Field name="recaptcha" component={renderCaptcha} validate={required} />
                    </habbo-captcha>
                    <p className="registration-form__safety">Bem-vindo ao Habbo Hotel! Divirta-se e <a href="/playing-habbo/safety" target="_blank">mantenha-se seguro</a>!</p>
                    <div className="form__footer">
                        <button type="submit" className="form__submit registration-form__button" disabled={this.props.submitting}>Feito! Crie o seu avatar!</button>
                    </div>
                    <p className="registration-form__purchases">Inclui compras opcionais de itens in-game.</p>
                </form>
            </habbo-registration-form>
        )
    }
}

export default withRouter(connect()(reduxForm({ form: 'registrationForm' })(RegistrationForm)))