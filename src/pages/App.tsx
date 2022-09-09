import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

const App: FC = (props) => {
  console.log('teste App')
  return (
    <div className="App">
      <Outlet {...props} />
    </div>
  )
}

export default App
