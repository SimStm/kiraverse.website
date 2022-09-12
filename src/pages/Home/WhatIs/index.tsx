import './index.css'
import { FC, Fragment, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import YouTubeEmbed from '../../../components/YoutubeEmbed'
import Card, { CardContent } from '../../../components/Card'
import WindowsLogo from '../../../assets/images/Windows-Logo-White.png'

const WhatIs: FC = (props) => {
  const content = `**KIRA is an online multiplayer blockchain-based game** created in
  Unreal Engine 5 where users across the globe can **come together to
  play, compete, and earn cryptocurrency**. Kira is a third-person
  shooter and is starting in season 1 with two game modes:
  **"Elimination" and "Battle Royale"**. Players can earn tokens to
  acquire, purchase, or rent characters, skins, weapons, and more to
  enhance their gameplay and further their **immersive experience in the
  Kiraverse.**`

  const contentCards = [
    { title: 'Battle Royale', content: 'Solos, Duos, Trios, Squads' },
    { title: 'Elimination', content: '1v1 up to 10v10' }
  ]

  const contentBigCard = [
    { title: 'Free Extension', content: 'Play for fun in our various Battle Royale modes.' },
    { title: 'Wager Extension', content: 'Survive to win cash prizes! Play competitive, dictating your own risk using our Pools structure.' },
    { title: 'Earn Per Kill Extension', content: 'Nonstop Action! Each kill equals more money! Respawn forever in this endless battle mode.' }
  ]

  return (
    <main className="mx-auto max-w-8xl py-20 bg-whatis relative align-top">
      <div className="whatis-white-bar absolute bottom-0 left-12 hidden md:block"></div>
      <div className="grid md:grid-cols-5 grid-rows-1 gap-4 mx-12 md:mx-36">
        <div className="text-center md:text-left md:col-span-2 md:mr-12 md:flex md:flex-col md:justify-between space-y-10">
          <div className="space-y-10">
            <div className="font-kusanagi tracking-tight text-lg md:text-3.5xl pink-text-shadow">
              What is Kiraverse?
            </div>
            <div className="text-sm md:pl-3 md:pr-6 leading-relaxed text-justify">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {contentCards.map((item, index) => (
              <Card key={index} title={item.title}>
                {item.content}
              </Card>
            ))}
          </div>
        </div>
        <div className="text-right md:col-span-3 mt-8 md:mt-0">
          <img
            src={WindowsLogo}
            title="Windows"
            className="w-1/5 float-right mb-4"
          />
          <YouTubeEmbed youtubeId="1ErlFCB1z44" extraClassName="clear-both" />
        </div>
        <div className="md:col-span-5 mt-8 space-y-4 text-center md:text-left">
          <h1 className="text-2xl font-bold">Each mode will have three playable extensions:</h1>
          <Card>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 space-y-10 md:space-y-0">
              {contentBigCard.map((item, index) => 
                <CardContent key={index} title={item.title} centerType="all">{item.content}</CardContent>
              )}
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default WhatIs
