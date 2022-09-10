import './index.css'
import { FC, Fragment } from 'react'
import Header from './Header'
import TopContent from './TopContent'
import WhatIs from './WhatIs'
import KiraNFTs from './KiraNFTs'

const PageHome: FC = (props) => {
  return (
    <Fragment>
      <Header />
      <TopContent />
      <WhatIs />
      <KiraNFTs />
    </Fragment>
  )
}

export default PageHome
