import './index.css'
import { FC, Fragment, useState } from 'react'
import Button from '../../../components/Button'
import InputButton from '../../../components/InputButton'
import Card from '../../../components/Card'
import ReactMarkdown from 'react-markdown'

const KiraNFTs: FC = (props) => {
  const content = `KIRA's genesis collection will consist of 10,001 NFTs that are
  created by world-renowned artists Antoni and Marc Tudisco. KIRA offers 
  ingeniously crafted alien-like humans delivered in 4K. Traits
  are algorithmically generated to deliver similar but unique assets
  to the consumer. There are common, rare, and one-of-a-kind properties and assets.
  
  Kira NFTs only carry artistic value and have no competitive impact on gameplay, but 
  there are a wide variety of benefits to be unlocked by holding one.`

  const contentCards = [
    {
      title: 'Premium Access for Holders',
      content: `If you hold a KIRA NFT you will unlock features such as: Staking to earn
      $KIRA passively, NFT rental, free wager matches, free in-game skins,
      purchase/eam all characters and weapons, and get the option to have
      your NFT integrated as an in-game avatar. You'll also earn an additional
      amount of SKIRA tokens for your gameplay compared to free players.`
    },

    {
      title: 'Basic Access',
      content: `Users who do not hold a KIRA NFT will only have
      access to a limited quantity of characters, weapons,
      skins, and upgrades, and will also earn less $KIRA
      token for their gameplay compared to holder. Free
      players will still have access to all game modes.`
    },

    {
      title: 'Rent-A-KIRA',
      content: `Our Kiraverse Marketplace will
      feature an NFT rental section. This
      system is created to allow users
      the ability to place their NFTs up
      for rent for other users to enjoy.`
    }
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
          <p className="mt-4 text-lg text-sm leading-6 text-indigo-200">
            <ReactMarkdown>{content}</ReactMarkdown>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-12 md:mx-36">
        {contentCards.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            centerType="all"
            justifyContent
            titleSize="xl"
            contentSize="base"
          >
            {item.content}
          </Card>
        ))}
      </div>
    </main>
  )
}

export default KiraNFTs
