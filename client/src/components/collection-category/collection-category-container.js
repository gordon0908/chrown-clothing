import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { WithSpinner } from '../withspinner/withspinner.component';
import { selectShopCollectionFlag } from '../redux/shop/shop-selector';
import CollectionCategory from './collection-category.component';

const mapStateToProps = createStructuredSelector({
    loading: selectShopCollectionFlag
});

const CollectionOverCategory = compose(connect(mapStateToProps), WithSpinner)(CollectionCategory);

export default CollectionOverCategory;
