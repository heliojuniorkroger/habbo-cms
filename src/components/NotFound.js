import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Não encontrado - Habbo">
                <main className="wrapper wrapper--content not-found">
                    <section className="not-found__content">
                        <h3>Oh bobba! Página não encontrada.</h3>
                        <div>O Frank não conseguiu encontrar a página que você estava procurando. Verifique o endereço ou volte à <a href="/">página de início</a> do habbo Hotel.</div>
                    </section>
                </main>
            </DocumentTitle>
        )
    }
}