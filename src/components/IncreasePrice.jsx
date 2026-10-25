import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IncreasePrice = async () => {
    const res = await fetch(process.env.ALL_PRODUCTS_API_LINK);
    const data = await res.json();
    const upProducts = data.filter(product => product.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);

    return (

        <div className="px-4 sm:px-6">
            <h2 className="max-w-7xl mx-auto my-5 flex items-center gap-2">
                <span className="text-red-500">▲</span>
                <span className="font-bold text-xl sm:text-2xl">
                    আজ দাম বেড়েছে
                </span>
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {upProducts.map(product => (
                    <Link
                        href={`/product/${product.id}`}
                        className="border-2 border-gray-200 bg-white rounded-2xl p-3 sm:p-4 min-w-0"
                        key={product.id}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-4xl sm:text-5xl bg-gray-200 rounded-2xl p-2 shrink-0">
                                {product.image}
                            </span>

                            <div className="min-w-0">
                                <p className="font-bold text-lg sm:text-xl break-words">
                                    {product.nameBn}
                                </p>

                                <small>
                                    {product.unit === 'kg'
                                        ? 'প্রতি কেজি'
                                        : product.unit === 'piece'
                                            ? 'প্রতি পিস'
                                            : product.unit === 'dozen'
                                                ? 'প্রতি ডজন'
                                                : product.unit === 'litre'
                                                    ? 'প্রতি লিটার'
                                                    : category.unit}
                                </small>
                            </div>
                        </div>

                        <h3 className="my-3 text-sm sm:text-base">
                            আজকের দাম
                        </h3>

                        <div className="flex flex-wrap justify-between items-center gap-2">
                            <h3>
                                <span className="text-xl sm:text-2xl font-bold">
                                    {product.today.toLocaleString('bn-BD')}
                                </span>{' '}
                                টাকা
                            </h3>

                            <p className="text-red-500 text-sm sm:text-base">
                                ▲{product.change.pct.toLocaleString('bn-BD')}%
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>


    );
};

export default IncreasePrice;