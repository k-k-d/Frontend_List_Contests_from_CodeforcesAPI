import React from 'react';

const Pagination = ({ currentPage, contestsPerPage, totalContests, pageNav }) => {
    const pageNumbers = [];
    var lp = 0, up = 0;
    const pages = Math.ceil(totalContests / contestsPerPage);
    if (pages > 20) {
        lp = currentPage - 9;
        up = currentPage + 10;
        if (lp < 1) {
            up += 1 - lp;
            lp = 1;
        }
        if (up >= pages) {
            lp -= up - pages;
            up = pages;
        }
    }
    else {
        lp = 1;
        up = pages;
    }
    for (let i = lp; i <= up; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className = 'row'>
            <nav>
                <ul className='pagination ml-5'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a style = {{color: "dodgerblue", cursor: "pointer"}} onClick = {() => pageNav(number)} className = 'page-link'>{number}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className = 'ml-5 col-xs-6 mt-2'>Number of Pages : {pages}</div>
        </div>
    );
};

export default Pagination;