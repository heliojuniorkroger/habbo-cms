import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../store'
import HabboHeader from './HabboHeader'
import HabboTabs from './HabboTabs'
import HabboFooter from './HabboFooter'
import HabboClient from './HabboClient'
import Router from './Router'

class Habbo extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="content">
                        <HabboHeader />
                        <HabboTabs />
                        <Router />
                    </div>
                    <HabboFooter />
                    <HabboClient />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <Habbo />
            </Provider>
        )
    }
}