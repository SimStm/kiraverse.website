import { FC, Fragment } from 'react'
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
    <Fragment>
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
          extraClassName="button-border hidden md:block"
          onClick={props.onClick}
          title={props.buttonTitle}
        />
      </div>
      <Button
        extraClassName="button-border block sm:hidden mt-2"
        onClick={props.onClick}
        title={props.buttonTitle}
      />
    </Fragment>
  )
}

export default InputButton
