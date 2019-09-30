import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../redux/cart/cartActions'
import { selectCartItemsCount } from '../redux/cart/cartSelectors'

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import './CartIcon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

// mapStateToProps 這邊雖然只監聽 cart reducer 但實際上只要整個 reducer 其中有任何改動都會被呼叫
// 因為每次都會產生全新的 object, 這對 performance 不是很好
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)