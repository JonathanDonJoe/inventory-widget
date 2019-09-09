import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

    render() {
        return(
            <div className='col-sm-12 col-md-6 col-lg-4'>
                <SearchBar />
                <ProductTable />
            </div>
        )
    }

}

export default FilterableProductTable;