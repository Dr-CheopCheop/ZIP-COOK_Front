import React from 'react';
import * as D from './DiscountMainStyle';

const DiscountPagination = ({ postsPerPage, totalPosts, paginate }: any ) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav>
                <D.PageButtonWrap>
                    {pageNumbers.map((number) => (
                        <D.PageButton onClick={() => paginate(number)}>
                            {number}
                        </D.PageButton>
                    ))}
                </D.PageButtonWrap>
            </nav>
        </div>
    )
};

export default DiscountPagination;