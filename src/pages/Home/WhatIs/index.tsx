import './index.css'
import { FC, Fragment, useState } from 'react'
import YouTubeEmbed from '../../../components/YoutubeEmbed'

const WhatIs: FC = (props) => {
  const title = (
    <Fragment>
      <span className="block inline">The ultimate </span>
      <span className="block text-kira-purple-500 inline">battle</span>
      <span className="block inline"> is here</span>
    </Fragment>
  )
  const subtitle = 'Enter the Kiraverse'

  const [content, setContent] = useState('')

  return (
    <main className="mx-auto max-w-8xl py-20 bg-whatis relative align-top">
      <div className="whatis-white-bar absolute bottom-0 left-12 hidden md:block"></div>
      <div className="grid md:grid-cols-2 grid-rows-1 gap-4 mx-12 md:mx-36">
        <div className="text-center md:text-left space-y-10">
          <div className="font-kusanagi tracking-tight text-lg md:text-5xl">
            What is Kiraverse?
          </div>
          <div className="text-sm md:pr-20 text-justify">
            KIRA is an online multiplayer blockchain-based game created in
            Unreal Engine 5 where users across the globe can come together to
            play, compete, and earn cryptocurrency. Kira is a third-person
            shooter and is starting in season 1 with two game modes:
            "Elimination" and "Battle Royale". Players can earn tokens to
            acquire, purchase, or rent characters, skins, weapons, and more to
            enhance their gameplay and further their immersive experience in the
            Kiraverse.
          </div>
        </div>
        <div className="text-right">
          <YouTubeEmbed youtubeId="1ErlFCB1z44" />
        </div>
      </div>
    </main>
  )
}

export default WhatIs
