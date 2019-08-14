import React from 'react'
import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSignIn, ...restProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
