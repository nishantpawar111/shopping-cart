import { useState } from "react";

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    //const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const [pageNumbers, setPageNumbers] = useState([1, 2, 3]);
    const totalItems = 105;
    const totalNoOfPages = totalItems / itemsPerPage;

    console.log("Current Page:", currentPage);

    const handleClick = (event) => {
        const clicked = event.target.value;
        if (
            clicked === "next" &&
            pageNumbers[pageNumbers.length - 1] < totalNoOfPages
        ) {
            if (currentPage === pageNumbers[2]) {
                const newPageNumbers = pageNumbers.map((number) => number + 1);
                setPageNumbers(newPageNumbers);
                setCurrentPage(newPageNumbers[2]);
            } else {
                setCurrentPage((currentPage) => currentPage + 1);
            }
        } else if (clicked === "prev" && pageNumbers[0] > 1) {
            if (currentPage === pageNumbers[0]) {
                const newPageNumbers = pageNumbers.map((number) => number - 1);
                setPageNumbers(newPageNumbers);
                setCurrentPage(newPageNumbers[0]);
            } else {
                setCurrentPage((currentPage) => currentPage - 1);
            }
        } else {
            setCurrentPage(event.target.value);
        }
    };

    return (
        <div className="container flex mx-auto py-4">
            <button
                onClick={handleClick}
                value="prev"
                className="h-10 px-5 text-blue-600 bg-white border border-r-0 border-blue-600 hover:bg-blue-100"
            >
                Prev
            </button>
            <ul className="flex">
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        className="h-10 px-5 text-blue-600 bg-white border border-r-0 border-blue-600 hover:bg-blue-100"
                        onClick={handleClick}
                        value={number}
                    >
                        {number}
                    </button>
                ))}
            </ul>
            <button
                onClick={handleClick}
                value="next"
                className="h-10 px-5 text-blue-600 bg-white border border-blue-600 hover:bg-blue-100"
            >
                Next
            </button>
        </div>
    );
};
