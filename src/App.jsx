import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import MainDash from './components/MainDash.jsx/MainDash'

const App = () => {
  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar/>
        <MainDash/>
        <div></div>
      </div>
    </div>
  )
}

export default App
