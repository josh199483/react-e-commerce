import React from 'react'
import { connect } from 'react-redux'
import CustomButton from './CustomButton'
import CartItem from './CartItem'
import { selectCartItems } from '../redux/cart/cartSelectors'

import './CartDropdown.scss'

const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown)