import React from 'react'
import { Route } from 'react-router-dom'

import OverviewCollection from '../components/OverviewCollection'
import Collection from './Collection'

const Shop = ({ match, collections }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={OverviewCollection} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
)

export default Shop
