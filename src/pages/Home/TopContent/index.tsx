import './index.css'
import { FC, Fragment, useState } from 'react'
import InputButton from '../../../components/InputButton'

const TopContent: FC = (props) => {
  const title = (
    <Fragment>
      <span className="block inline">The ultimate </span>
      <span className="block text-kira-purple-500 inline">battle</span>
      <span className="block inline"> is here</span>
    </Fragment>
  )
  const subtitle = 'Enter the Kiraverse'

  const [content, setContent] = useState('')

  const subscribeByEmail = () => {
    alert('-- TBD --')
  }

  return (
    <main className="mx-auto max-w-8xl py-80 bg-top">
      <div className="text-center">
        <h1 className="font-kusanagi uppercase tracking-tight sm:text-5xl md:text-4xl text-3xl">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-2xl text-xl font-bold uppercase">
          {subtitle}
        </p>
        <div className="mx-auto mt-5 sm:w-1/3 sm:justify-center md:mt-5 mx-4 md:mx-auto">
          <div className="rounded-md shadow">
            <InputButton
              placeholder=""
              buttonTitle="Pre-register for alpha access"
              onClick={subscribeByEmail}
              onChange={setContent}
              value={content}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default TopContent
