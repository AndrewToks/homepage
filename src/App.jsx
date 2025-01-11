import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='max-w-[1200px] bg-gradient-to-br from-white to-[#F6EFEB] ml-auto mr-auto'>
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}

export default App