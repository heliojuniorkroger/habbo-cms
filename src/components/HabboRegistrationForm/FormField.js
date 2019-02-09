import React, { Component } from 'react'
import passwordStrength from 'password-strength'

export default class extends Component {
    getPasswordStrength() {
        const strength = passwordStrength(this.props.input.value)
        switch (strength.strength) {
            case 'simple':
                return {
                    label: 'Falhou',
                    width: '10%',
                    indicatorClass: 'password-strength__indicator--fail'
                }
            case 'medium':
            return {
                label: 'Razoável',
                width: '50%',
                indicatorClass: 'password-strength__indicator--fair'
            }
            case 'strong':
            return {
                label: 'Bom',
                width: '100%',
                indicatorClass: 'password-strength__indicator--good'
            }
            default:
                return null
        }
    }
    render() {
        let popover
        let toggleMask
        const strengthOptions = getPasswordStrength()
        const showError = this.props.meta.touched && this.props.meta.invalid
        const showStrengthMeter = this.props.meta.touched && this.props.input.name === 'passwordNew' && this.props.meta.error !== 'Este campo é obrigatório.'
        const strengthMeter = (
            <habbo-password-strength>
                <div className="password-strength__label">
                    <span>Segurança da senha: </span>
                    <span>{strengthOptions.label}</span>
                </div>
                <div className="password-strength__field">
                    <div className={`password-strength__indicator ${strengthOptions.indicatorClass}`} style={{ width: strengthOptions.width }}></div>
                </div>
                {strengthOptions.label === 'Falhou' && <p className="password-strength__error">Muito fraco! Você deve criar uma senha mais longa. As senhas devem conter, pelo menos, 6 caracteres.</p>}
            </habbo-password-strength>
        )
        const isPasswordNewRepeatedRequiredError = this.props.meta.error === 'Este campo é obrigatório.' && this.props.input.name === 'passwordNewRepeated'
        if ((showError && !isPasswordNewRepeatedRequiredError) || showStrengthMeter) popover = (
            <div className={`form__popover ${this.props.meta.error ? 'form__popover--error' : ''}`}>{showStrengthMeter ? strengthMeter : this.props.meta.error}</div>
        )
        if (this.props.showToggleMask) toggleMask = (
            <i onClick={this.props.toggleMaskFn} className={`password-toggle-mask__icon ${this.props.type === 'text' ? 'active' : ''}`}></i>
        )
        return (
            <fieldset className={`form__fieldset ${this.props.extraClass}`}>
                <label htmlFor={this.props.id} className="form__label">{this.props.label}</label>
                <p>{this.props.helper}</p>
                <div className="form__field">
                    <input
                        {...this.props.input}
                        id={this.props.id}
                        type={this.props.type}
                        autoComplete="off"
                        className={`form__input ${showError ? 'ng-invalid' : ''}`}
                    />
                    {toggleMask}
                    {popover}
                </div>
            </fieldset>
        )
    }
}
