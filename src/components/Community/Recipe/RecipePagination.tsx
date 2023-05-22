import React from 'react';
import * as R from './RecipeMainStyle';

const RecipePagination = ({ postsPerPage, totalPosts, paginate }: any ) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav>
                <R.PageButtonWrap>
                    {pageNumbers.map((number) => (
                        <R.PageButton onClick={() => paginate(number)}>
                            {number}
                        </R.PageButton>
                    ))}
                </R.PageButtonWrap>
            </nav>
        </div>
    )
};

export default RecipePagination;