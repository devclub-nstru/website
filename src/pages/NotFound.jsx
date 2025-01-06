import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
   <>
    <div className="notfound-container">
        <div className="notfound-heading-container">
        <p className="notfound-heading">
            404
        </p>
        </div>
        <div className="notfound-message-container">
            <p className='notfound-message'>
                Oops! page not found.
            </p>
            <p className="notfound-submessage">
            Please check you have entered the correct url and try again
            </p>
            <Link to='/' className='notfound-button'>
                Back to Homepage
            </Link>
        </div>

    </div>
   </>
  )
}

export default NotFound