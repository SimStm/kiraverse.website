import './index.css'
import { FC, Fragment } from 'react'
import Header from './Header'
import TopContent from './TopContent'
import WhatIs from './WhatIs'

const PageHome: FC = (props) => {
    return (
        <Fragment>
            <Header />
            <TopContent />
            <WhatIs />
        </Fragment>
    )
}

export default PageHome