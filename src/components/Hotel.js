import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import habboActions from '../actions/habboActions'

class Hotel extends Component {
    componentDidMount() {
        this.props.dispatch(habboActions.openClient())
        this.props.dispatch(habboActions.toggleClient())
    }
    render() {
        return (
            <DocumentTitle title="Hotel - Habbo">
                <div className="hotel"></div>
            </DocumentTitle>
        )
    }
}

export default connect()(Hotel)