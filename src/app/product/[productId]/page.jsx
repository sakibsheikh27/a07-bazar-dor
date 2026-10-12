import React, { Suspense } from 'react';

const ProductDetailPage = async({params}) => {
    const { productId } = await params;

    const res = await fetch(`${process.env.SINGLE_PRODUCT_BY_ID}/${productId}`);
    const products = await res.json();
    const markets = products.markets;
    console.log(products)

    return (
        <div>
            <h2>name: {products.nameBn}</h2>
            <p>price: {products.today}</p>
            {products.markets.map(market => (
                <div key={market.market}>
                    <h2>{market.market}</h2>
                    <h2>{market.division}</h2>
                </div>
            ))}
        </div>
    );
};

const ProductId = ({ params }) => {
    return (
        <Suspense fallback={<p>Loading category...</p>}>
            <ProductDetailPage params={params} />
        </Suspense>
    );
};

export default ProductId;
