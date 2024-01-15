import React from 'react'
import NavBar from '../components/Navbar'

function Page({ content }) {
  return (
    <>
     <div style={{ backgroundColor: '#3B8BE8'}}>
        <NavBar />
        </div>
        <div style={{
            backgroundColor: '#6aadff',
            width: '100hw',
            height: '100vh',
            margin: 0, 
            padding: 0

            }}
        >
            {content}
        
        </div>
    </>
  )
}

export default Page