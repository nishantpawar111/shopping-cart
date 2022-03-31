import React from "react";

export const Button = ({
    color = "red",
    className = "",
    children,
    ...rest
}) => {
    return (
        <button
            className={`py-2 px-4 rounded bg-${color}-500 hover:bg-${color}-600 focus:outline-none ring-opacity-75 ring-${color}-400 focus:ring text-white text-md ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};
