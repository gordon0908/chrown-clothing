import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

import { fetchShopStart } from '../../components/redux/shop/shop-action';
import CollectionOverContainer from '../../components/collection-overview/collection-overview-container';
import CollectionOverCategory from '../../components/collection-category/collection-category-container';

const Shop = ({ fetchShopStart, match }) => {
    useEffect(() => {
        fetchShopStart();
    }, [fetchShopStart]);

    return (
        <div className="shop-page">
            <Route
            exact
            path={`${match.path}`}
            component={CollectionOverContainer}
            />
            <Route
            path={`${match.path}/:category`}
            component={CollectionOverCategory}
            />
        </div>
    )
};

export default connect(null, { fetchShopStart })(Shop);