import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../redux/cart/cartSelectors'
import { selectCurrentUser } from '../redux/user/userSelectors'
// because svg is not a component in react
import { ReactComponent as Logo } from '../assets/crown.svg'
import './Header.scss'
import { auth } from '../firebase/firebase.utils'
import CartIcon from './CartIcon'
import CartDropdown from './CartDropdown'

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
      {
        hidden ? null :
        <CartDropdown />
      }
    </div>
  )
}

// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
//   currentUser,
//   hidden
// })
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
