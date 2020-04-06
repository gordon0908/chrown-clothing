import { createSelector } from 'reselect';

const selectShop = state => state.shop;
// const idMap = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// };

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selecShopCategory = category => createSelector(
    [selectShopCollections],
    collections => collections[category]
    // collections => collections.find(col => col.id === idMap[category])
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)