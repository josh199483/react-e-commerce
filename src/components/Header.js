import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// because svg is not a component in react
import { ReactComponent as Logo } from '../assets/crown.svg'
import './Header.scss'
import { auth } from '../firebase/firebase.utils'

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>
          SHOP
        </Link>
        <Link className="option" to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          )
          : (
            <Link className="option" to='/signin'>
              SIGN IN
            </Link>
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
