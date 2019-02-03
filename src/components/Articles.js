import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import HabboWebPages from './HabboWebPages'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Faça amigos, divirta-se e seja famoso! - Habbo">
                <main className="wrapper wrapper--content">
                    <section>
                        <h1>Últimas Notícias</h1>
                        <div className="main main--fixed">
                            <section>
                            </section>
                            <div className="news__navigation"><Link to="/community/category/all" className="news__more">Mais notícias</Link></div>
                        </div>
                        <HabboWebPages pageKey="common/box_learn_how_to_stay_safe" />
                        <HabboWebPages pageKey="common/box_parents_guide" />
                    </section>
                </main>
            </DocumentTitle>
        )
    }
}