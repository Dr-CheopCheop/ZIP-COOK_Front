import React from 'react';
import * as M from './MainStyle';

const Pagination = ({ postsPerPage, totalPosts, paginate }: any ) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav>
                <M.PageButtonWrap>
                    {pageNumbers.map((number) => (
                        <M.PageButton key={number} onClick={() => paginate(number)}>
                            {number}
                        </M.PageButton>
                    ))}
                </M.PageButtonWrap>
            </nav>
        </div>
    )
};

export default Pagination;