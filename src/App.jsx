import React from 'react'
import BannerImage from './assets/banner.png'
import BannerImageTwo from './assets/banner2.png'
import Image from './components/image'
import List from './components/List'

const App = () => {
  return (
    <div>
       <List className="" text="Home"/>
       <List className="" text="Pages"/>
       <List text="Services"/>
       <List text="Blog"/>
       <List text="Contact"/>
    </div>
  )
}

export default App