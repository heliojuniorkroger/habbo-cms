import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Fotos - Habbo">
                <main>
                    <header className="photos__header">
                        <div className="photos__header__container wrapper">
                            <div className="photos__header__image__wrapper">
                                <div className="photos__header__image"></div>
                            </div>
                            <div className="photos__header__content">
                                <h1 className="photos__header__title">Fotos do Habbo Hotel</h1>
                                <p>Dê uma olhada em alguns dos grandes momentos do Hotel retratados pelos Habbos.</p>
                            </div>
                        </div>
                    </header>
                    <section className="wrapper wrapper--content">
                    </section>
                </main>
            </DocumentTitle>
        )
    }
}