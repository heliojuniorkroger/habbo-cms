import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import UserService from '../services/UserService'

class HabboUserMenu extends Component {
    constructor() {
        super()
        this.state = {}
    }
    toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }
    render() {
        return (
            <habbo-user-menu class="header__aside header__aside--user-menu">
                <div className="user-menu">
                    <div className="user-menu__header">
                        <a className="user-menu__toggle" onClick={() => this.toggleMenu()}>
                            <div className="user-menu__name__wrapper">
                                <div className="user-menu__name">{this.props.user.username}</div>
                            </div>
                            <habbo-imager class="user-menu__avatar">
                                <img alt={this.props.user.username} width="54" height="62" className="imager" src={`https://www.habbo.com.br/habbo-imaging/avatarimage?figure=${this.props.user.look}&headonly=1&gesture=sml&head_direction=2.png`} style={{ minWwidth: 54 }} />
                            </habbo-imager>
                        </a>
                    </div>
                    <ul className={`user-menu__list ${this.state.showMenu ? '' : 'ng-hide'}`}>
                        <li className="user-menu__item"><a className="user-menu__link user-menu__link--profile" href={`/profile/${this.props.user.username}`}>Ver o meu perfil</a></li>
                        <li className="user-menu__item"><a className="user-menu__link user-menu__link--settings">Configurações</a></li>
                        <li className="user-menu__item"><a className="user-menu__link user-menu__link--help" target="_blank" rel="noopener noreferrer" href="/api/public/help?returnTo=https://help.habbo.com.br">Ajuda</a></li>
                        <li className="user-menu__item"><a onClick={() => UserService.logout()} className="user-menu__link user-menu__link--logout">Desconectar</a></li>
                    </ul>
                </div>
            </habbo-user-menu>
        )
    }
}

export default withRouter(connect(store => ({ user: store.user }))(HabboUserMenu))