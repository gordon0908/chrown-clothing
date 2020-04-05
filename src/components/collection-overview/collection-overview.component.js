import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../components/redux/shop/shop-selector';

import CollectionView from '../../components/collection-view/collection-view.component';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({id, ...otherProps}) => {
            return (
                <CollectionView key={id} {...otherProps}/>
            )
        })}
    </div>
);

const mapDispatchToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapDispatchToProps)(CollectionOverview);