export const Cart = ({ className = "", ...rest }) => {
    return (
        <div
            className={`col-span-1 rounded-md border border-gray-300 p-5 ${className}`}
            {...rest}
        >
            Cart
        </div>
    );
};
