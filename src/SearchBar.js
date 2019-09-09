import React from 'react';

function Searchbar(props) {


    return(
        <div className='search-bar'>
            <input type='text' placeholder='search' />
            <div>
                <input id='in-stock' type='checkbox' /> Only show products in stock
            </div>
        </div>
    )
}

export default Searchbar;