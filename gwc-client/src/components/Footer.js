import React from 'react'
import './Footer.css'
import { FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="container"> {/*outer div*/}
        <div className="column"> {/*column div*/}
            <h3>Contact Us</h3>
            <p>girlswhocodeuf@gmail.com</p>
            <p>201 Criser Hall</p>
            <p>Gainesville, FL 32611</p>
        </div>
        <div className="column"> {/*column div*/}
            <h3>Stay In Touch</h3>
            <a href="https://www.instagram.com/girlswhocodeuf/" className="row"> <FaInstagram className="logo"/> Instagram</a>
            <a href="https://web.groupme.com/join_group/61398109/B1pS02QU" className="row"> GroupMe</a>
            <a href="https://www.linkedin.com/company/girlswhocodeuf/about/" className="row"> <FaLinkedin className="logo"/> LinkedIn</a>
        </div>
        <div className="column"> {/*column div*/}
            <h3>Opportunities</h3>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe2-gQ7PHSqVZgG38AGrm85cYnOY0Gvw2XMWadUpoViFJFRvA/viewform" className="row">Membership Form</a>
            <p>interest Form</p>
            <p></p>
        </div>
    </div>
  )
}

export default Footer