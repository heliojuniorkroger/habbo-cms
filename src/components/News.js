import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import HabboWebPages from './HabboWebPages'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Todas - Habbo">
                <main>
                    <section className="wrapper wrapper--content">
                        <habbo-compile class="main main--fixed">
                            <section>
                                <header className="news-category__header">
                                    <span>Quero ver notícias sobre:</span>
                                    <nav className="news-category__navigation">
                                        <ul className="news-category__list">
                                        </ul>
                                    </nav>
                                </header>
                                <footer>
                                    <nav>
                                        <ul>
                                            <li><a href="/community/category/all/2" className="news-category__next">Mais antigas</a></li>
                                        </ul>
                                    </nav>
                                </footer>
                            </section>
                        </habbo-compile>
                        <HabboWebPages pageKey="common/box_learn_how_to_stay_safe" />
                    </section>
                </main>
            </DocumentTitle>
        )
    }
}