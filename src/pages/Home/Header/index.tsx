import './index.css'
import { FC } from 'react'
import Button from '../../../components/Button'

export interface IHeaderNavigationProps {
  navigation: INavigationItem[]
  showButtons?: boolean
  onlyButtons?: boolean
}

export interface INavigationItem {
  name: string
  type?: string
  onClick?: () => void
  href?: string
}

const Header: FC = (props) => {
  const subscribeByEmail = () => {
    alert('-- TBD --')
  }
  const titleName = 'KIRAVERSE'
  const navigation: INavigationItem[] = [
    {
      name: 'Alpha Sign Up',
      type: 'button',
      onClick: subscribeByEmail
    },
    { name: 'Home', href: '#' },
    { name: 'Play', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Partners', href: '#' }
  ]

  return (
    <header className="bg-black">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center w-full justify-between">
            <a href="#">
                <span className="font-kusanagi uppercase text-white text-xl">{titleName}</span>
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              <HeaderNavigation navigation={navigation} />
            </div>
          </div>
          <div className="ml-10 space-x-4 lg:hidden">
            <HeaderNavigation
              navigation={navigation}
              showButtons={true}
              onlyButtons={true}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          <HeaderNavigation navigation={navigation} showButtons={false} />
        </div>
      </nav>
    </header>
  )
}

const HeaderNavigation: FC<IHeaderNavigationProps> = ({
  navigation,
  showButtons = true,
  onlyButtons = false
}) => {
  return (
    <>
      {navigation.map((link, index) => {
        if (showButtons && link.type && link.type === 'button') {
          return <Button key={index} title={link.name} onClick={link.onClick} />
        }

        if (!onlyButtons && !link.type) {
          return (
            <a
              key={index}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50 font-kusanagi uppercase"
            >
              {link.name}
            </a>
          )
        }
      })}
    </>
  )
}

export default Header
