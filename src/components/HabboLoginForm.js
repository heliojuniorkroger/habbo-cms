import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios'
import UserService from '../services/UserService'
import { API_URL, FACEBOOK_APP_ID } from '../config'

const renderField = props => (
    <input
        {...props.input}
        type={props.type}
        placeholder={props.label}
        className={`form__input login-form__input ${props.meta.error ? 'ng-invalid' : ''}`}
    />
)

class HabboLoginForm extends Component {
    facebookLogin = async facebookUser => {
        try {
            const user = await UserService.facebookLogin(facebookUser)
            UserService.set(user)
        } catch (err) {
            // deal with errors
        }
    }
    submit(values) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(`${API_URL}/authentication/login`, values)
                UserService.set(response.data)
                resolve()
            } catch (err) {
                // if (err.response) throw new SubmissionError({ email: true, password: true })
                reject()
            }
        })
    }
    render() {
        return (
            <habbo-login-form>
                <form name="loginForm" noValidate className="login-form__form" onSubmit={this.props.handleSubmit(this.submit.bind(this))}>
                    <fieldset className="form__fieldset login-form__fieldset">
                        <div className="form__field">
                            <Field component={renderField} name="email" type="email" autoFocus="" label="E-mail" />
                        </div>
                    </fieldset>
                    <fieldset className="form__fieldset login-form__fieldset">
                        <div className="form__field">
                            <Field component={renderField} name="password" type="password" label="Senha" />
                        </div>
                        <habbo-claim-password class="form__helper login-form__helper"><small><a>Esqueci a minha senha</a></small></habbo-claim-password>
                    </fieldset>
                    <button type="submit" className="login-form__button" disabled={this.props.submitting}>Vamos lá!</button>
                </form>
                <div className="login-form__social">
                    <habbo-facebook-connect type="large">
                        <FacebookLogin
                            appId={FACEBOOK_APP_ID}
                            fields="email"
                            callback={this.facebookLogin.bind(this)}
                            render={props => <button type="button" onClick={props.onClick} className="facebook-connect">Entre com o Facebook</button>}
                        />
                    </habbo-facebook-connect>
                    <habbo-facebook-connect type="small">
                        <FacebookLogin
                            appId={FACEBOOK_APP_ID}
                            fields="email"
                            callback={this.facebookLogin.bind(this)}
                            render={props => <button type="button" onClick={props.onClick} className="facebook-connect"></button>}
                        />
                    </habbo-facebook-connect>
                </div>
                <div className="login-form__register"><a href="/registration">Ainda não tem uma conta? Entre já!</a></div>
            </habbo-login-form>
        )
    }
}

export default withRouter((reduxForm({ form: 'loginForm', persistentSubmitErrors: true })(HabboLoginForm)))