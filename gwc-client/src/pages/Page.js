import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

function Page({ content }) {
  return (
    <>
        <NavBar />
        <div style={{
            backgroundColor: 'black',
            width: '100hw',
            height: '100vh',
            color: 'white'
            }}
        >
            {content}
        </div>
        <Footer/>
    </>
  )
}

export default Page