import React, { Component } from 'react'

import SHOP_DATA from './shopData'
import PreviewCollection from '../components/PreviewCollection'

class Shop extends Component {
  state = {
    collections: SHOP_DATA
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...restProps }) => (
            <PreviewCollection key={id} {...restProps} />
          ))
        }
      </div>
    )
  }
}

export default Shop
