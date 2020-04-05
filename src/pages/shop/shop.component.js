import React from 'react';

import { SHOP_DATA } from './shop.data';

import CollectionView from '../../components/collection-view/collection-view.component';

class Shop extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div className="shop-page">
                {this.state.collections.map(({id, ...otherProps}) => {

                    return (
                        <CollectionView key={id} {...otherProps}/>
                    )
                })}
            </div>
        )
    }
}

export default Shop;
