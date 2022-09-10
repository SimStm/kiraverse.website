import './index.css'
import { FC, Fragment, useState } from 'react'
import Button from '../../../components/Button'
import InputButton from '../../../components/InputButton'
import Card from '../../../components/Card'

const KiraNFTs: FC = (props) => {
  const contentCards = [
    { title: 'Battle Royale', content: 'Solos, Duos, Trios, Squads' },
    { title: 'Elimination', content: '1v1 up to 10v10' },
    { title: 'Elimination', content: '1v1 up to 10v10' }
  ]

  return (
    <main className="mx-auto max-w-8xl bg-kiranfts py-20 space-y-60">
      <div className="bg-indigo">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-kusanagi tracking-tight text-white sm:text-4xl">
            <span className="block pink-text-shadow">KIRA NFTS</span>
          </h2>
          <p className="text-xs">
            <br></br>
          </p>
          <hr></hr>
          <p className="mt-4 text-lg text-xs leading-6 text-indigo-200">
            KIRA's genesis collection will consist of 10,001 NFTs that are
            created by world-re- nowned artists Antoni and Marc Tudisco. KIRA
            Offers ingeniously crafted alien-like humans delivered in 4K. Traits
            are algorithmically generated to deliver similar but unique assets
            to the consumer. There are common, rare, and one-of-a-kind proper-
            ties and assets.<br></br>Kira NFTs only carry artistic value and
            have no competitive impact On gameplay, but there are a wide variety
            of benefits to be unlocked by holding one.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-12 md:mx-36">
        {contentCards.map((item, index) => (
          <Card key={index} title={item.title}>
            {item.content}
          </Card>
        ))}
      </div>
    </main>
  )
}

export default KiraNFTs
