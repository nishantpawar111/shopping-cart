import { useCart } from "@recoil/hooks";
import { Divider } from "@components";
import { atom } from "recoil";
import { useRecoilState } from "recoil";
import Link from "next/link";

const Title = ({ children }) => {
    return <a className="hover:underline text-3xl">{children}</a>;
};



export const nameState = atom({
  key: "nameState", // unique ID (with respect to other atoms/selectors)
  default: 0 // default value (aka initial value)
});

export const Header = () => {
    const [itemsInCart] = useCart();
    const [name, setName] = useRecoilState(nameState);
    return (
        <>
            <div className="flex justify-between p-2 text-4xl text-blue-700 font-bold">
                <Link href="/">
                    <a className="hover:underline ">My Ecommerce Site</a>
                </Link>
                {/* <Title>{`Cart(${itemsInCart.length})`}</Title> */}
                <Link href="/cart">
                    <a className="hover:underline">{`Cart (${itemsInCart.length})` }</a>
                </Link>
            </div>
            <Divider />
        </>
    );
};
