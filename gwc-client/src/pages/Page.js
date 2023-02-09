import React from 'react'
import NavBar from '../components/Navbar'

function Page({ content }) {
  return (
    <>
        <NavBar />
        <div>
            {content}
        </div>
    </>
  )
}

export default Page