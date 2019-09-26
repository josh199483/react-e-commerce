import React from 'react'
import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...restProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
