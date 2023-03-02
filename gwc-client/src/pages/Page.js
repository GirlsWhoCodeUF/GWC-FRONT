import React from 'react'
import NavBar from '../components/Navbar'

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
    </>
  )
}

export default Page