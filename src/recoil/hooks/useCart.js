import { useRecoilState, useRecoilValue } from "recoil";
import { cartAtom, cartLengthAtom } from "../atoms/cart";
import { itemsQuery } from "../atoms/items";

export function useCart() {
    const items = useRecoilValue(itemsQuery);
    const [itemsInCart, setItemsInCart] = useRecoilState(cartAtom);

    const addItem = (id) => {
        console.log(id);
        const item = items.find((item) => item._id === id);
        if (item) {
            setItemsInCart((prevItems) => [...prevItems, item]);
        }
    };

    const removeItem = (id) => {
        setItemsInCart((prevItems) =>
            prevItems.filter((item) => item._id !== id),
        );
    };

    const updateQuantityOfItem = (id, quantity) => {
        setItemsInCart((prevItems) =>
            prevItems.map((prevItem) => {
                if (prevItem._id === id) {
                    return { ...prevItem, quantity };
                }
                return prevItem;
            }),
        );
    };

    return [
        itemsInCart,
        { addItem, removeItem, updateQuantity: updateQuantityOfItem },
    ];
}
