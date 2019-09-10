import React, { Component } from 'react';

class Searchbar extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
        this.changeSearch = this.changeSearch.bind(this)
    }

    changeSearch(e) {
        const newVal = e.target.value;
        console.log(newVal);
        // this.setState({
        //     search: newVal
        // })
        this.props.changeFromParent(newVal);
    }

    render() {       
        return(
            <div className='search-bar'>
                <input type='text' onChange={this.changeSearch} value={this.props.search} placeholder='Search' />
                <div>
                    <input id='in-stock' type='Checkbox' /> Only show products in stock
                </div>
            </div>
        )
    }
}

export default Searchbar;