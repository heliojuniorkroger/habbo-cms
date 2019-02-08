import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import HabboLoginFrom from './HabboLoginForm'
import HabboUserMenu from './HabboUserMenu'

class HabboHeaderWrapper extends Component {
    render() {
        let headerWrapper
        this.props.useLargeHeader === true
            ? headerWrapper = <habbo-header-large>{this.props.children}</habbo-header-large>
            : headerWrapper = <habbo-header-small>{this.props.children}</habbo-header-small>
        return headerWrapper
    }
}

class HabboHeader extends Component {
    constructor() {
        super()
        this.state = {
            showLoginModal: false,
            claimPasswordModalOpened: false
        }
    }
    render() {
        const useLargeHeader = this.props.location.pathname === '/' && !this.props.user
        let stickyHeader
        if (useLargeHeader) stickyHeader = (
            <Fragment>
                <div className="header__top sticky-header sticky-header--top">
                    <div className="wrapper">
                        <div className="header__top__content">
                            <button className="header__top__toggle">Login</button>
                            <div className="header__login-form ng-hide">
                                <HabboLoginFrom />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__content">
                    <habbo-register-banner>
                        <div className="register-banner__hotel"></div>
                        <div className="register-banner__wrapper">
                            <div className="register-banner__register">
                                <h1 className="register-banner__logo">Habbo</h1>
                                <h2 className="register-banner__title">Um lugar divertido com gente incrível.</h2><Link to="/registration" className="register-banner__button">Entre Agora!</Link>
                            </div>
                        </div>
                    </habbo-register-banner>
                </div>
            </Fragment>
        )
        let habboUserMenu
        let habboHotelButton
        let loginButton
        if (this.props.user) {
            habboUserMenu = <HabboUserMenu />
            habboHotelButton = (
                <li className="navigation__item navigation__item--aside navigation__item--hotel">
                    <habbo-hotel-button>
                        <Link to="/hotel" className="hotel-button" id="ga-linkid-hotel"><span className="hotel-button__text">Hotel</span></Link>
                    </habbo-hotel-button>
                </li>
            )
        } else {
            if (!useLargeHeader) loginButton = (
                <Fragment>
                    <Modal
                        show={this.state.showLoginModal}
                        onHide={() => this.setState({ showLoginModal: false })}
                        backdrop={!this.state.claimPasswordModalOpened}
                    >
                        <button className="modal__close" onClick={() => this.setState({ showLoginModal: false })} />
                        <h3 className="modal__title">Login</h3>
                        <div className="modal__content">
                            <HabboLoginFrom
                                openedClaimPasswordModal={() => this.setState({ claimPasswordModalOpened: true })}
                                closedClaimPasswordModal={() => this.setState({ claimPasswordModalOpened: false })}
                            />
                        </div>
                    </Modal>
                    <div className="header__aside">
                        <button className="header__login__button" onClick={() => this.setState({ showLoginModal: true })}>
                            <span className="header__login__icon">Login</span>
                        </button>
                    </div>
                </Fragment>
            )
        }
        return (
            <HabboHeaderWrapper useLargeHeader={useLargeHeader}>
                {stickyHeader}
                <header className="header__wrapper wrapper">
                    <a href="/" className="header__habbo__logo"><h1 className="header__habbo__name">Habbo</h1></a>
                    {habboUserMenu}
                    {loginButton}
                </header>
                <habbo-navigation>
                    <nav className="navigation">
                        <ul className="navigation__menu">
                            <li className="navigation__item"><Link to="/" className="navigation__link navigation__link--home">Início</Link></li>
                            <li className="navigation__item"><Link to="/community" className="navigation__link navigation__link--community">Comunidade</Link></li>
                            <li className="navigation__item"><Link to="/shop" className="navigation__link navigation__link--shop">HabboShop</Link></li>
                            <li className="navigation__item"><Link to="/playing-habbo" className="navigation__link navigation__link--playing-habbo">Sobre o Hotel</Link></li>
                            {habboHotelButton}
                        </ul>
                    </nav>
                </habbo-navigation>
            </HabboHeaderWrapper>
        )
    }
}

export default withRouter(connect(store => ({ user: store.user }))(HabboHeader))