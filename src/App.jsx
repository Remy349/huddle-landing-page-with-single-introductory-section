import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'

import illustration from './images/illustration-mockups.svg'
import logo from './images/logo.svg'

function App() {
  return (
    <>
      <Header logo={logo} />
      <Main illustration={illustration} />
      <Footer />
    </>
  )
}

export default App
