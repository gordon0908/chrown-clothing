import React from 'react';
import { connect } from 'react-redux';

import { selecShopCategory } from '../redux/shop/shop-selector';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-category.scss';

const CollectionCategory = ({collection: { title, items }, match}) => {

    return (
        <div className="collection-category">
            <span className="title">{title}</span>

            <div className="collection-items">
                {items && items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selecShopCategory(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(CollectionCategory);
