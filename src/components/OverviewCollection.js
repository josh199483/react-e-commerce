import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../redux/shop/shopSelector'
import PreviewCollection from './PreviewCollection'
import './OverviewCollection.scss'

const OverviewCollection = ({ collections }) => (
  <div className='collections-overview'>
    {
      collections.map(({ id, ...restProps }) => (
        <PreviewCollection key={id} {...restProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(OverviewCollection)