import { FC } from 'react'
import './index.css'

export interface ICard {
  title?: string
  justifyContent?: boolean
  centerType?: 'none' | 'title' | 'all'
  titleSize?: 'lg' | 'xl' | '2xl' | '3xl'
  contentSize?: 'sm' | 'base' | 'lg'
  columnSize?: 'col-span-1' | 'col-span-2' | 'col-span-3' | 'col-span-4' | 'col-span-5' | 'col-span-6' | 'col-span-7' | 'col-span-8' | 'col-span-9' | 'col-span-10'
  translucid?: boolean
  children?: React.ReactNode
  extraClassName?: string
}

const ICard: FC<ICard> = (props) => {
  const cardStyle = `flex rounded-md shadow-sm box-border-base`
  const cardBackgroundStyle = `flex w-full rounded-lg p-4 ${props.translucid ? 'box-content-opacity' : 'box-content'}`
  return (
    <div className={`${cardStyle} ${props.columnSize}`}>
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
        <div className={cardBackgroundStyle}>
          <CardContent {...props}/>
        </div>
      </div>
    </div>
  )
}

export const CardContent: FC<ICard> = (props) => {
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

  return (
    <div className="w-full">
      { props.title && <h1 className={titleStyle}>{props.title}</h1> }
      <p className={contentStyle}>{props.children}</p>
    </div>
  )
}

export default ICard
