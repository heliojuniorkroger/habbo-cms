import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

class HabboTabs extends Component {
    render() {
        let tabs = []
        switch (this.props.location.pathname.split('/')[1]) {
            case '':
            case 'messaging':
                if (this.props.user) tabs = [
                    { title: 'Novidades', to: '/' },
                    { title: 'Mensagens', to: '/messaging' }
                ]
                break
            case 'community':
                tabs = [
                    { title: 'Fotos', to: '/community/photos' },
                    { title: 'Quartos', to: '/community/rooms' },
                    { title: 'Fã Sites', to: '/community/fansites' },
                    { title: 'Notícias', to: '/community/category', notExact: true }
                ]
                break
            case 'playing-habbo':
                tabs = [
                    { title: 'O que é o Habbo?', to: '/playing-habbo/what-is-habbo' },
                    { title: 'Como Jogar', to: '/playing-habbo/how-to-play' },
                    { title: 'Habbo Etiqueta', to: '/playing-habbo/habbo-way' },
                    { title: 'Segurança', to: '/playing-habbo/safety' },
                    { title: 'Ajuda', to: '/playing-habbo/help' }
                ]
                break
            default:
                return false
        }
        tabs = tabs.map((tab, i) => {
            return (
                <habbo-tab key={i}>
                    <li className="tab"><NavLink to={tab.to} className="tab__link" activeClassName="tab__link--active" exact={!tab.notExact}>{tab.title}</NavLink></li>
                </habbo-tab>
            )
        })
        return (
            <habbo-tabs>
                <nav className="tabs">
                    <ul className="tabs__menu ng-hide">
                        {tabs}
                    </ul>
                </nav>
            </habbo-tabs>
        )
    }
}

export default withRouter(connect(store => {
    return { user: store.user }
})(HabboTabs))