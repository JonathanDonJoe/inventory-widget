import React from 'react';
import productData from './data';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';




function ProductTable(props) {
    
    let tempProducts = {};
    let inStockArr = productData.data
    // console.log(productData.data[0].name)
    if(props.inStock) {
        inStockArr = productData.data.filter( item => item.inStock)
    }
    // console.log(productData.data.filter( item => item.inStock))

    inStockArr.filter( item => item.name.toLowerCase().includes(props.search.toLowerCase())).forEach((product,i) => {
        if (tempProducts[product.category] === undefined) {
            tempProducts[product.category] = []     
        }
        tempProducts[product.category].push(product);
    })
    
    
    let rows = [];
    for (let key in tempProducts) {
        // console.log(key);
        rows.push( <ProductCategoryRow key={key} header={key} /> );
        tempProducts[key].forEach( (product, i) => {
            rows.push( <ProductRow key={key+i} product={product}/> );
        })
    }

    console.log(props.search)
    console.log(props.inStock)

    return(
        <div className='product-table'>
            <table className='table table-stripe'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;