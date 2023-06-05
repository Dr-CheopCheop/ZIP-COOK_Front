import React from 'react';
import * as S from './SaleMainStyle';

const SalePagination = ({ postsPerPage, totalPosts, paginate }: any ) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav>
                <S.PageButtonWrap>
                    {pageNumbers.map((number) => (
                        <S.PageButton key={number} onClick={() => paginate(number)}>
                            {number}
                        </S.PageButton>
                    ))}
                </S.PageButtonWrap>
            </nav>
        </div>
    )
};

export default SalePagination;