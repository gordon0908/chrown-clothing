import React, { useEffect, lazy, Suspense } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

import { fetchShopStart } from '../../components/redux/shop/shop-action';


const CollectionOverContainer = lazy(()=>import('../../components/collection-overview/collection-overview-container'))
const CollectionOverCategory = lazy(()=>import('../../components/collection-category/collection-category-container'));
const Shop = ({ fetchShopStart, match }) => {
    useEffect(() => {
        fetchShopStart();
    }, [fetchShopStart]);

    return (
        <div className="shop-page">
            <Suspense>
                <Route
                exact
                path={`${match.path}`}
                component={CollectionOverContainer}
                />
                <Route
                path={`${match.path}/:category`}
                component={CollectionOverCategory}
                />
            </Suspense>

        </div>
    )
};

export default connect(null, { fetchShopStart })(Shop);