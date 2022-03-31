import { useRecoilValue } from 'recoil';
import { itemsQuery } from '../atoms/items';

export function usePaginatedItemsValue(pageSize = 10) {
    const PAGE_SIZE = pageSize;
    const currentPageNumber = useRecoilValue(itemsPaginationAtom);
    const items = useRecoilValue(itemsQuery);

    const getItems = (pageNumber) => {
        const start = (pageNumber - 1) * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        return items.slice(start, end);
    };

    return [getItems, items.length];
}

// export function useItemsPagination() {
//     const [currentPageNumber, setCurrentPageNumber] = useRecoilState(itemsPaginationAtom);
//     return [currentPageNumber, setCurrentPageNumber];
// }
