import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Habbo">
                <main>
                    <header className="rooms__header">
                        <div className="rooms__header__container wrapper">
                            <div className="rooms__header__image__wrapper">
                                <div className="rooms__header__image"></div>
                            </div>
                            <div className="rooms__header__content">
                                <h1 className="rooms__header__title">Galeria dos Quartos</h1>
                                <p>Confira os quartos mais populares do Habbo Hotel!</p>
                            </div>
                        </div>
                    </header>
                    <section className="wrapper wrapper--content rooms-wrapper">
                    </section>
                </main>
            </DocumentTitle>
        )
    }
}