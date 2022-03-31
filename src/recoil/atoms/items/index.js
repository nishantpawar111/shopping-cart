import { atom, selector } from 'recoil';

export const itemsQuery = selector({
    key: 'itemsQuery',
    get: async () => {
        const response = await fetch('http://xapi.ngminds.com/api/getAllProducts');
        const {products} = await response.json();
        return products;
    },
});

export const itemsPaginationAtom = atom({
    key: 'itemsPagination',
    default: 1,
});
