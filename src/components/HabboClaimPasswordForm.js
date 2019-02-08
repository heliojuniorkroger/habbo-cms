import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { required, email } from '../validators'

const renderField = props => {
    let showError = props.meta.invalid && props.meta.touched
    let popoverError
    if (showError) popoverError = (
        <div className="form__popover form__popover--error">{props.meta.error}</div>
    )
    return (
        <div className="form__field">
            <input
                {...props.input}
                id={props.id}
                type="email"
                autoComplete="off"
                className={`form__input ${showError ? 'ng-invalid' : ''}`}
            />
            {popoverError}
        </div>
    )
}

class HabboClaimPasswordForm extends Component {
    render() {
        return (
            <habbo-claim-password-form>
                <form noValidate className="form">
                    <fieldset className="form__fieldset">
                        <label htmlFor="email-address" className="form__label">Insira seu e-mail</label>
                        <Field
                            id="email-address"
                            name="emailAddress"
                            component={renderField}
                            validate={[ required, email ]}
                        />
                    </fieldset>
                    <div className="form__footer">
                        <a className="form__cancel" onClick={() => this.props.cancelAction()}>Cancelar</a>
                        <button type="submit" className="form__submit">Enviar</button>
                    </div>

                    {/* <p>Acabamos de enviar um e-mail com um link para você reestabelecer a sua senha.</p>
                    <h4 className="claim-password__email">a@b.com</h4>
                    <p><b>IMPORTANTE! Lembre-se de verificar a pasta "lixo" e "correio não desejado".</b></p> */}
                </form>
            </habbo-claim-password-form>
        )
    }
}

export default reduxForm({ form: 'habboClaimPasswordForm' })(HabboClaimPasswordForm)