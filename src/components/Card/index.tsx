import { FC } from 'react'
import './index.css'

export interface ICard {
  title: string
  centerType?: 'none' | 'title' | 'all'
  children?: React.ReactNode
}

const ICard: FC<ICard> = (props) => {
  const titleStyle = 'text-3xl font-bold'+(props.centerType && props.centerType !== 'none' ? ' text-center' : '')
  const contentStyle = 'mt-1 text-lg'+(props.centerType && props.centerType === 'all' ? ' text-center' : '')
  return (
    <div className="flex rounded-md shadow-sm box-border-base">
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
        <div className="flex w-full rounded-lg p-4 box-content">
          <div className="w-full">
            <h1 className={titleStyle}>{props.title}</h1>
            <p className={contentStyle}>
              {props.children}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ICard
