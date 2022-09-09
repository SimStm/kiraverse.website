import { FC } from 'react'
import Button from '../Button'
import './index.css'

export interface IInputButton {
  placeholder: string
  buttonTitle: string
  value: string
  onChange?: (text: string) => void
  onClick?: () => void
}

const InputButton: FC<IInputButton> = (props) => {
  return (
    <div className="mt-1 flex rounded-md shadow-sm">
      <div className="relative flex flex-grow items-stretch focus-within:z-10 input-border-base">
        <input
          type="text"
          name="input"
          id="input"
          className="block w-full rounded-none rounded-l-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input-opacity input-border"
          placeholder={props.placeholder}
          onChange={(str) =>
            props.onChange ? props.onChange(str.target.value) : undefined
          }
          value={props.value}
        />
      </div>
      <Button
        // className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        extraClassName="button-border"
        onClick={props.onClick}
        title={props.buttonTitle}
      />
    </div>
  )
}

export default InputButton
