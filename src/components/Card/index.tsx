import { FC } from 'react'
import './index.css'

export interface ICard {
  title: string
  justifyContent?: boolean
  centerType?: 'none' | 'title' | 'all'
  titleSize?: 'lg' | 'xl' | '2xl' | '3xl'
  contentSize?: 'sm' | 'base' | 'lg'
  translucid?: boolean
  children?: React.ReactNode
}

const ICard: FC<ICard> = (props) => {
  const titleStyle = `text-${props.titleSize ?? '3xl'} font-bold ${
    props.centerType && props.centerType !== 'none' ? 'text-center' : ''
  }`
  const contentStyle = `mt-1 text-${props.contentSize ?? 'lg'} ${
    props.justifyContent
      ? 'text-justify'
      : props.centerType && props.centerType === 'all'
      ? ' text-center'
      : ''
  }`
  const cardBackgroundStyle = `flex w-full rounded-lg p-4  ${props.translucid ? 'box-content-opacity' : 'box-content'}`
  return (
    <div className="flex rounded-md shadow-sm box-border-base">
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
        <div className={cardBackgroundStyle}>
          <div className="w-full">
            <h1 className={titleStyle}>{props.title}</h1>
            <p className={contentStyle}>{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ICard
