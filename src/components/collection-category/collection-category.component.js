import React from 'react';
import { connect } from 'react-redux';

import { selecShopCategory } from '../redux/shop/shop-selector';

import './collection-category.scss';

const CollectionCategory = ({collection, match}) => {
    console.log(collection, '==')
    return (
        <div className="collection-category">
            Categorycc
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selecShopCategory(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(CollectionCategory);
