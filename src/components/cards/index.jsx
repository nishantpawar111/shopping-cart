import React from "react";
import { useCart } from "@recoil/hooks";
import data from "@public/meta.json";
import { Button, Pagination } from "@components";

const bgColorArray = ["#d9edf7", "#dff0d8", "#fcf8e3", "#f2dede"];

export const Cards = () => {
    const [_,{addItem}] = useCart();
    return (
        <div className="flex-1 container my-8 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(data?.products ?? []).map(({ _id, image, name, price }, index) => (
                    <div
                        key={_id}
                        className={`col-span-1 rounded-md border border-gray-300 p-5 flex flex-col justify-between bg-[${bgColorArray[(index+1)%4]}]`}
                    >
                        <div>
                            <img
                                src={`http://xapi.ngminds.com/${image}`}
                                alt={name}
                                className="h-40 mb-2"
                            />
                            <h2 className=" mb-2">{name}</h2>
                        </div>
                        <div>
                            <p className="m-0">{price}</p>
                            <Button onClick={()=>addItem(_id)}>Add to cart</Button>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination />
        </div>
    );
};
