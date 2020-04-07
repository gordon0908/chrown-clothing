import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectShopCollections } from '../../components/redux/shop/shop-selector';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { addShop } from '../../components/redux/shop/shop-action';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionCategory from '../../components/collection-category/collection-category.component';

class Shop extends Component {
    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snopshot => {
            const data = convertCollectionsSnapshotToMap(snopshot);
            // console.log('=====')
            this.props.addShop(data);
            // console.log(data)
        });
    }
    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={match.path} component={CollectionOverview}/>
                <Route path={`${match.path}/:category`} component={CollectionCategory}/>
            </div>
        )
    }
};


// const Shop = ({ match }) => (
//     <div className="shop-page">
//         <Route exact path={match.path} component={CollectionOverview}/>
//         <Route path={`${match.path}/:category`} component={CollectionCategory}/>
//     </div>
// );


export default connect(null, { addShop })(Shop);


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

