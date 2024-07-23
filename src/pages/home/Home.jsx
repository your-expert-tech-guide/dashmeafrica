import React from 'react'
import Header from '../../components/Header/Header'
import SecondHeader from '../../components/Header/SecondHeader'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <SecondHeader />
      {/* <p className='text-red-500 text-2xl'>Home Page</p> */}
      <Footer />
    </div>
  )
}

export default Home