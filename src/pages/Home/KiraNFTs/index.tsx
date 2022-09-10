import './index.css'
import { FC, Fragment, useState } from 'react'
import Button from '../../../components/Button'
import InputButton from '../../../components/InputButton'

const KiraNFTs: FC = (props) => {
  const title = (
    <Fragment>
      <span className="block inline">The ultimate </span>
      <span className="block purple-500 inline">battle</span>
      <span className="block inline"> is here</span>
    </Fragment>
  )
  const subtitle = 'Enter the Kiraverse'

  const [content, setContent] = useState('')

  return (
    <main className="mx-auto max-w-8xl py-80 bg-kiranfts">

    <div className="bg-indigo background-color: transparent;">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">KIRA NFTS</span>
          <hr></hr>
        </h2>

        <p className="mt-4 text-lg leading-6 text-indigo-200">
          KIRA's genesis collection will consist of 10,001 NFTs that are created by world-re-
          nowned artists Antoni and Marc Tudisco. KIRA Offers ingeniously crafted alien-like
          humans delivered in 4K. Traits are algorithmically generated to deliver similar but
          unique assets to the consumer. There are common, rare, and one-of-a-kind proper-
          ties and assets.<br></br>Kira NFTs only carry artistic value and have no competitive impact On gameplay,
          but there are a wide variety of benefits to be unlocked by holding one.
        </p>
          
        
       
      </div>
    </div>

    </main>
  )
}

export default KiraNFTs
