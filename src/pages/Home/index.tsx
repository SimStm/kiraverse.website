import './index.css'
import { FC } from 'react'
import Header from './Header'
import TopContent from './TopContent'
import KiraNFTs from './KiraNFTs'

const PageHome: FC = (props) => {
    return (
        <>
            <Header />
            <TopContent />
            <KiraNFTs />
        </>
    )
}

export default PageHome