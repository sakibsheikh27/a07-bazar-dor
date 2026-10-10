import React from 'react';

const AllProducts = async() => {
    const res = await fetch(process.env.ALL_PRODUCTS_API_LINK);
    const data = await res.json(); 
    return (
        <div>
            All Products
        </div>
    );
};

export default AllProducts;