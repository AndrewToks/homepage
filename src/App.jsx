import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='max-w-[1200px] p-5 ml-auto mr-auto'>
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}

export default App