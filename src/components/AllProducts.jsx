import Link from 'next/link';
import React from 'react';

const AllProducts = async () => {
    const res = await fetch(process.env.ALL_PRODUCTS_API_LINK);
    const data = await res.json();
    return (

        <div className="mb-15 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto my-5">
                <h2 className="font-bold text-xl sm:text-2xl">
                    সব পণ্য
                </h2>

                <p className="text-sm sm:text-base text-gray-600">
                    মোট {data.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {data.map(product => (
                    <Link
                        href={`/product/${product.id}`}
                        className="border border-gray-200 bg-white rounded-2xl p-3 sm:p-4 hover:shadow-md transition-shadow"
                        key={product.id}
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center shrink-0 w-16 h-16 sm:w-20 sm:h-20 text-4xl sm:text-5xl bg-gray-100 rounded-2xl">
                                {product.image}
                            </span>

                            <div className="min-w-0">
                                <p className="font-bold text-base sm:text-xl break-words">
                                    {product.nameBn}
                                </p>

                                <small className="text-gray-500">
                                    {product.unit === 'kg'
                                        ? 'প্রতি কেজি'
                                        : product.unit === 'piece'
                                            ? 'প্রতি পিস'
                                            : product.unit === 'dozen'
                                                ? 'প্রতি ডজন'
                                                : product.unit === 'litre'
                                                    ? 'প্রতি লিটার'
                                                    : product.unit}
                                </small>
                            </div>
                        </div>

                        <h3 className="my-3 text-sm sm:text-base">
                            আজকের দাম
                        </h3>

                        <div className="flex justify-between items-center gap-2">
                            <div className="min-w-0">
                                <h3 className="flex flex-wrap items-baseline gap-1">
                                    <span className="text-xl sm:text-2xl font-bold">
                                        {product.today.toLocaleString('bn-BD')}
                                    </span>
                                    <span className="text-sm">টাকা</span>
                                </h3>
                            </div>

                            <div
                                className={`shrink-0 text-sm sm:text-base ${Number(product.change.pct) > 0
                                        ? 'text-red-600'
                                        : Number(product.change.pct) < 0
                                            ? 'text-green-600'
                                            : 'text-gray-500'
                                    }`}
                            >
                                {Number(product.change.pct) > 0
                                    ? '▲'
                                    : Number(product.change.pct) < 0
                                        ? '▼'
                                        : '-'}
                                {' '}
                                {Math.abs(Number(product.change.pct)).toLocaleString('bn-BD')}%
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>


    );
};

export default AllProducts;