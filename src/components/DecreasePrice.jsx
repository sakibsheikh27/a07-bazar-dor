import React from 'react';

const DecreasePrice = async() => {
    const res = await fetch(process.env.ALL_PRODUCTS_API_LINK);
    const data = await res.json();
    const downProducts = data.filter(product => product.change.dir === 'down').sort((a, b) => b.change.ptc - a.change.ptc).slice(0, 6);

    console.log('Decrease procucts', downProducts)
    return (
        <div>
            Decrease Price!!!
        </div>
    );
};

export default DecreasePrice;