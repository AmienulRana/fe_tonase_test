import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
export default function Pagination(props){
    const { itemsPerPage, setCurrentItems, data } = props;
     // We start with an empty list of items.
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return(
        <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="prev"
            renderOnZeroPageCount={null}
            containerClassName="flex w-full justify-center text-orange items-center my-16"
            activeClassName="border-2 border-orange"
            pageClassName="text-center py-1 px-4 rounded-lg mx-2 font-bold"
        />
    )
}