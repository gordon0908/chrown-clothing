import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectShopCollections } from '../../components/redux/shop/shop-selector';



import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const Shop = () => (
    <div className="shop-page">
        <CollectionOverview />
    </div>
);

export default Shop;


// import { SHOP_DATA } from './shop.data';
/*
import CollectionView from '../../components/collection-view/collection-view.component';

const Shop = ({ collections }) => (
    <div className="shop-page">
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

export default connect(mapDispatchToProps)(Shop);
*/
/*
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
*/

