import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import habboActions from '../actions/habboActions'
import { API_URL } from '../config'

class HabboClient extends Component {
    constructor() {
        super()
        this.state = { showClientCloseText: true }
    }
    componentDidMount() {
        if (this.props.user) this.getClientUrl(this.props.user.id)
    }
    componentWillReceiveProps(props) {
        if (!this.props.user && props.user) this.getClientUrl(props.user.id)
    }
    getClientUrl = async id => {
        try {
            const response = await axios.get(`${API_URL}/client/url`, { headers: { 'client-id': id } })
            this.setState({ clientUrl: response.data.url })
        } catch (err) {
            // ...
        }
    }
    back() {
        this.props.dispatch(habboActions.toggleClient())
        this.props.history.goBack()
    }
    render() {
        if (this.props.habbo.clientOpen) {
            return (
                <habbo-client>
                    <div className={`client ${this.props.habbo.clientVisible ? 'client--visible' : ''}`}>
                        <div className="client__buttons">
                            <button
                                className="client__close"
                                onClick={() => this.back()}
                                onMouseOver={() => this.setState({ showClientCloseText: true })}
                                onMouseOut={() => this.setState({ showClientCloseText: false })}
                            >
                                <i className="client__close__icon icon icon--habbo"></i>
                                <div className="client__close__expand" style={{ width: this.state.showClientCloseText ? 41 : 0 }}>
                                    <div className="client__close__text">INÍCIO</div>
                                </div>
                            </button>
                            <button className="client__fullscreen">
                                <i className="client__fullscreen__icon icon icon--fullscreen"></i>
                                <i className="client__fullscreen__icon icon icon--fullscreen-back ng-hide"></i>
                            </button>
                        </div>
                        <iframe id="hotel-client" title="Hotel" className="client__frame" src={this.state.clientUrl}></iframe>
                    </div>
                </habbo-client>
            )
        } else {
            return null
        }
    }
}

export default withRouter(connect(store => ({ habbo: store.habbo, user: store.user }))(HabboClient))