import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { WithSpinner } from '../withspinner/withspinner.component';
import { selectShopCollectionFlag } from '../redux/shop/shop-selector';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
    loading: selectShopCollectionFlag
});

const CollectionOverContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionOverview);

export default CollectionOverContainer;
