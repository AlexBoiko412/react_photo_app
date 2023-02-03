import cl from './Pagination.module.css'

import React from 'react';

const Pagination = ({pagesArray, setPage, page}) => {

    return (
        <div className={cl.pagination}>
            {
                pagesArray.length
                ?
                pagesArray.map((p) =>
                    <div
                        key={p}
                        onClick={() =>  setPage(p)}
                        className={
                            page === p
                            ? [cl.pagination__item, cl.active].join(" ")
                            : cl.pagination__item
                        }
                    >{p}</div>
                )
                    : <div></div>
            }
        </div>
    );
};

export default Pagination;