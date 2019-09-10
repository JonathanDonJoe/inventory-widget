import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            inStock: false
        }
    }

    handleFilterChange = (value) => {
        this.setState({
            search: value
        })
    }

    handleStockChange = (value) => {
        this.setState({
            inStock: value
        })
    }

    render() {
        return(
            <div className='col-sm-12 col-md-6 col-lg-4'>
                <SearchBar search={this.state.search} inStock={this.state.inStock} changeFromParent= {this.handleFilterChange} changeFromParentStock={this.handleStockChange} />
                <ProductTable search={this.state.search} inStock={this.state.inStock} />
            </div>
        )
    }

}

export default FilterableProductTable;