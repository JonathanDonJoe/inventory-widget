import React, { Component } from 'react';

class Searchbar extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
        this.changeSearch = this.changeSearch.bind(this)
        this.inStock = this.inStock.bind(this)
    }

    changeSearch(e) {
        const newVal = e.target.value;
        console.log(newVal);
        // this.setState({
        //     search: newVal
        // })
        this.props.changeFromParent(newVal);
    }

    inStock(e) {
        const newVal = e.target.checked;
        // console.log(newVal)
        // console.log(this.props.changeFromParentStock)
        this.props.changeFromParentStock(newVal);
    }

    render() {       
        return(
            <div className='search-bar'>
                <input type='text' onChange={this.changeSearch} value={this.props.search} placeholder='Search' />
                <div>
                    <input id='in-stock' type='Checkbox' onChange={this.inStock}/> Only show products in stock
                </div>
            </div>
        )
    }
}

export default Searchbar;