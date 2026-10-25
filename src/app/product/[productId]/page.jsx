import React, { Suspense } from 'react';

const ProductDetailPage = async ({ params }) => {
    const { productId } = await params;

    const res = await fetch(`${process.env.SINGLE_PRODUCT_BY_ID}/${productId}`);
    const products = await res.json();
    const markets = products.markets;

    const highestPrice = Math.max(
        ...markets.map(market => market.max)
    );

    const lowestPrice = Math.min(
        ...markets.map(market => market.min)
    );

    const averagePrice = (highestPrice + lowestPrice) / 2;



    return (
<div className="max-w-7xl mx-auto px-3 sm:px-5">
    {/* Product Header */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 justify-between items-stretch sm:items-center py-3 px-3 sm:px-4 border-2 border-gray-200 rounded-2xl bg-white mt-8 sm:mt-12 md:mt-20">

        <div className="flex gap-3 items-center min-w-0">
            <span className="text-5xl sm:text-6xl md:text-7xl shrink-0 py-3 px-2 bg-gray-200 rounded-2xl">
                {products.image}
            </span>

            <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold break-words">
                    {products.nameBn}
                </h2>

                <p className="text-xs sm:text-sm text-gray-500">
                    {products.unit === 'kg'
                        ? 'প্রতি কেজি'
                        : products.unit === 'piece'
                            ? 'প্রতি পিস'
                            : products.unit === 'dozen'
                                ? 'প্রতি ডজন'
                                : products.unit === 'litre'
                                    ? 'লিটার'
                                    : products.unit} · {products.nameBn}
                </p>

                <p className="text-sm mt-2">
                    {products.today - products.yesterday > 0
                        ? `গতকালের তুলনায় আজ দাম বেড়েছে · ${Math.abs(products.today - products.yesterday).toLocaleString('bn-BD')} টাকা`
                        : products.today - products.yesterday < 0
                            ? `গতকালের তুলনায় আজ দাম কমেছে · ${Math.abs(products.today - products.yesterday).toLocaleString('bn-BD')} টাকা`
                            : 'গতকালের তুলনায় আজকের দামের কোনো পরিবর্তন হয়নি'}
                </p>
            </div>
        </div>

        {/* Today's Price */}
        <div className="py-3 px-4 sm:py-4 sm:px-5 bg-gray-100 rounded-2xl sm:min-w-44">
            <p className="text-sm">আজকের দাম</p>

            <h2 className="text-2xl font-bold">
                {products.today.toLocaleString('bn-BD')}
            </h2>

            <p className="text-sm">
                টাকা / {products.unit === 'kg'
                    ? 'প্রতি কেজি'
                    : products.unit === 'piece'
                        ? 'প্রতি পিস'
                        : products.unit === 'dozen'
                            ? 'প্রতি ডজন'
                            : products.unit === 'litre'
                                ? 'লিটার'
                                : products.unit}
            </p>

            <div
                className={
                    Number(products.change.pct) > 0
                        ? 'text-red-600'
                        : Number(products.change.pct) < 0
                            ? 'text-green-600'
                            : 'text-gray-500'
                }
            >
                {Number(products.change.pct) > 0
                    ? '▲'
                    : Number(products.change.pct) < 0
                        ? '▼'
                        : '-'}{' '}
                {Math.abs(Number(products.change.pct)).toLocaleString('bn-BD')}%
            </div>
        </div>
    </div>

    {/* Price Summary */}
    <div className="my-6 sm:my-8 border-2 border-gray-200 rounded-2xl bg-white p-3 sm:p-5">
        <h3 className="text-lg sm:text-xl font-bold">
            দামের সারসংক্ষেপ
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-4">
            <div className="border-2 border-gray-200 py-3 px-4 sm:px-5 rounded-2xl min-w-0">
                <small>সর্বনিম্ন দাম</small>
                <h2 className="text-green-500">
                    <span className="text-2xl font-bold">
                        {lowestPrice.toLocaleString('bn-BD')}
                    </span>{' '}
                    টাকা
                </h2>
                <small>সবচেয়ে কম দামের বাজার</small>
            </div>

            <div className="border-2 border-gray-200 py-3 px-4 sm:px-5 rounded-2xl min-w-0">
                <small>সর্বাধিক দাম</small>
                <h2 className="text-red-500">
                    <span className="text-2xl font-bold">
                        {highestPrice.toLocaleString('bn-BD')}
                    </span>{' '}
                    টাকা
                </h2>
                <small>সবচেয়ে বেশি দামের বাজার</small>
            </div>

            <div className="border-2 border-gray-200 py-3 px-4 sm:px-5 rounded-2xl min-w-0">
                <small>গড় দাম</small>
                <h2 className="text-green-500">
                    <span className="text-2xl font-bold">
                        {averagePrice.toLocaleString('bn-BD')}
                    </span>{' '}
                    টাকা
                </h2>
                <small>প্রতি কেজি-এর হিসাবে</small>
            </div>
        </div>

        {/* Market Price Table */}
        <div className="mt-8 sm:mt-10 mb-5">
            <h3 className="text-lg sm:text-xl font-bold">
                বাজারভিত্তিক আজকের দাম
            </h3>

            <div className="my-5 sm:my-8 overflow-x-auto rounded-2xl border border-gray-300">
                <table className="w-full min-w-[650px] border-collapse bg-white text-sm sm:text-base">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 sm:p-3">বাজার</th>
                            <th className="border border-gray-300 p-2 sm:p-3">বিভাগ</th>
                            <th className="border border-gray-300 p-2 sm:p-3">সর্বনিম্ন দাম</th>
                            <th className="border border-gray-300 p-2 sm:p-3">সর্বোচ্চ দাম</th>
                            <th className="border border-gray-300 p-2 sm:p-3">গড় দাম</th>
                        </tr>
                    </thead>

                    <tbody>
                        {markets.map((market) => (
                            <tr key={market.market}>
                                <td className="border border-gray-300 p-2 sm:p-3 whitespace-nowrap">
                                    {market.market}
                                </td>
                                <td className="border border-gray-300 p-2 sm:p-3 whitespace-nowrap">
                                    {market.division}
                                </td>
                                <td className="border border-gray-300 p-2 sm:p-3 whitespace-nowrap">
                                    {market.min.toLocaleString('bn-BD')} টাকা
                                </td>
                                <td className="border border-gray-300 p-2 sm:p-3 whitespace-nowrap">
                                    {market.max.toLocaleString('bn-BD')} টাকা
                                </td>
                                <td className="border border-gray-300 p-2 sm:p-3 whitespace-nowrap">
                                    {((market.max + market.min) / 2).toLocaleString('bn-BD')} টাকা
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
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
