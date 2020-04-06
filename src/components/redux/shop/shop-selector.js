import { createSelector } from 'reselect';

const selectShop = state => state.shop;
const idMap = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selecShopCategory = category => createSelector(
    [selectShopCollections],
    collections => collections.filter(col => col.id === idMap[category])
);