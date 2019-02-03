import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import HabboRegistrationForm from './HabboRegistrationForm'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Registrar-se - Habbo">
                <main className="wrapper wrapper--content">
                    <HabboRegistrationForm />
                </main>
            </DocumentTitle>
        )
    }
}