import { FC } from 'react'
import './index.css'

export interface IButton {
  title: string
  className?: string
  extraClassName?: string
  onClick?: () => void
}

const Button: FC<IButton> = (props) => {
  const className = (props.className ??
  'bg-button font-button inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')
  + ` ${(props.extraClassName ?? '')}`
  return (
    <button
      type="button"
      className={className}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  )
}

export default Button
