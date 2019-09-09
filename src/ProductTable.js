import React, { Component } from 'react';
import productData from './data';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';




function ProductTable(props) {
    
    let tempProducts = {};
    
    productData.data.forEach((product,i) => {
        if (tempProducts[product.category] === undefined) {
            tempProducts[product.category] = []
            
        }
        tempProducts[product.category].push(product);

        // return(
        //         <ProductRow key={i} product={product} />
        //     )

        
    })
    
    console.log(tempProducts);

    let rows = [];

    for (let key in tempProducts) {
        // console.log(key);
        rows.push( <ProductCategoryRow header={key} /> );
        tempProducts[key].forEach( (product) => {
            rows.push( <ProductRow product={product}/> );
        })
    }

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