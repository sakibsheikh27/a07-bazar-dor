import React from 'react';

const IncreasePrice = async() => {
    const res = await fetch(process.env.ALL_PRODUCTS_API_LINK);
    const data = await res.json();
    const upProducts = data.filter(product => product.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);

    console.log('Get products', upProducts);
    return (
        <div>
            Increase Price!!!
        </div>
    );
};

export default IncreasePrice;