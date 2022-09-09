import './index.css'
import { FC } from 'react'
import Header from './Header'
import TopContent from './TopContent'

const PageHome: FC = (props) => {
    return (
        <>
            <Header />
            <TopContent />
        </>
    )
}

export default PageHome