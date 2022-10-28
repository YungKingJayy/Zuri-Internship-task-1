import React from 'react'
import githubIcon from './assets/Github-Icon.png'
import slackIcon from './assets/slack.png'


export default function Main() {
    return (
        <div className="links">
            <a target="_blank" href="https://twitter.com/kalu_mcjethro" id="twitter">Twitter Link</a>
            <a target="_blank" href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
            <a target="_blank" href="https://books.zuri.team/"  title="this is where you find books about design and coding" id="books">Zuri Books</a>
            <a target="_blank" href="https://books.zuri.team/python-for-beginners?ref_id=<Mcjethro>" title="get the tips & guidelines you need to create truly professional designs" id="book__python">Python Books</a>
            <a target="_blank" href="https://background.zuri.team" title="coders you can trust with our background check service" id="pitch">Background Check for Coders</a>
            <a target="_blank" href="https://books.zuri.team/design-rules" title="get our free rulebook on design" id="book__design">Design Books</a>
            <div className="icons">
                <a target="_blank" id="slack" href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U047WTLGM5M" alt="slack"><img src={slackIcon}/></a>
                <a target="_blank" id="github" href="https://github.com/YungKingJayy" alt="github"><img src={githubIcon}/></a>
            </div>
        </div>
    )
}