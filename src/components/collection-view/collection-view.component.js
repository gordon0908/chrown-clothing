import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-view.component.scss';

const CollectionView = ({ title, items }) => {

    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item, ind) => ind < 4).map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
};

export default CollectionView;
