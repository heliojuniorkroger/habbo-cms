import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios'
import { required } from '../validators'
import HabboClaimPasswordForm from './HabboClaimPasswordForm'
import UserService from '../services/UserService'
import { API_URL, FACEBOOK_APP_ID } from '../config'

const renderField = props => (
    <input
        {...props.input}
        type={props.type}
        placeholder={props.label}
        className={`form__input login-form__input ${props.meta.error && props.meta.touched ? 'ng-invalid' : ''}`}
    />
)

class HabboLoginForm extends Component {
    constructor() {
        super()
        this.state = { showClaimPasswordModal: false }
    }
    async facebookLogin(facebookUser) {
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
    openedClaimPasswordModal() {
        const modals = Array.from(document.querySelectorAll('.modal'))
        const dialogs = Array.from(document.querySelectorAll('.modal-dialog'))
        modals[0].style.zIndex = 1039
        dialogs[1].classList.add('modal-sm')
        if (this.props.openedClaimPasswordModal) this.props.openedClaimPasswordModal()
    }
    closedClaimPasswordModal() {
        this.setState({ showClaimPasswordModal: false })
        document.querySelector('.modal').style.zIndex = 1050
        if (this.props.closedClaimPasswordModal) this.props.closedClaimPasswordModal()
    }
    render() {
        return (
            <habbo-login-form>
                <Modal
                    onShow={() => this.openedClaimPasswordModal()}
                    show={this.state.showClaimPasswordModal}
                    onHide={() => this.closedClaimPasswordModal()}
                >
                    <button className="modal__close" onClick={() => this.closedClaimPasswordModal()} />
                    <h3 className="modal__title">Esqueci a minha senha</h3>
                    <div className="modal__content">
                        <HabboClaimPasswordForm cancelAction={() => this.closedClaimPasswordModal()} />
                    </div>
                </Modal>
                <form noValidate className="login-form__form" onSubmit={this.props.handleSubmit(this.submit.bind(this))}>
                    <fieldset className="form__fieldset login-form__fieldset">
                        <div className="form__field">
                            <Field
                                component={renderField}
                                name="email"
                                type="email"
                                autoFocus=""
                                label="E-mail"
                                validate={required}
                            />
                        </div>
                    </fieldset>
                    <fieldset className="form__fieldset login-form__fieldset">
                        <div className="form__field">
                            <Field
                                component={renderField}
                                name="password"
                                type="password"
                                label="Senha"
                                validate={required}
                            />
                        </div>
                        <habbo-claim-password class="form__helper login-form__helper"><small><a onClick={() => this.setState({ showClaimPasswordModal: true })}>Esqueci a minha senha</a></small></habbo-claim-password>
                    </fieldset>
                    <button type="submit" className="login-form__button" disabled={this.props.submitting}>Vamos lá!</button>
                </form>
                <div className="login-form__social">
                    <habbo-facebook-connect type="large">
                        <FacebookLogin
                            appId={FACEBOOK_APP_ID}
                            fields="email"
                            callback={this.facebookLogin.bind(this)}
                            render={props => <button type="button" onClick={props.onClick} className="facebook-connect">Login pelo Facebook</button>}
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