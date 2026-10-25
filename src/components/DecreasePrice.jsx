import Link from 'next/link';
import React from 'react';

const DecreasePrice = async () => {
    const res = await fetch(process.env.ALL_PRODUCTS_API_LINK);
    const data = await res.json();
    const downProducts = data.filter(product => product.change.dir === 'down').sort((a, b) => b.change.ptc - a.change.ptc).slice(0, 6);

    return (
        <div>
            <h2 className='max-w-7xl mx-auto my-5 px-4'>
                <span className='text-green-500'>▼</span>
                <span className='font-bold text-2xl'>আজ দাম কমেছে</span>
            </h2>

            <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
                {downProducts.map(product => (
                    <Link
                        href={`/product/${product.id}`}
                        className='border-2 border-gray-200 bg-white rounded-2xl p-3'
                        key={product.id}
                    >
                        <div className='flex items-center gap-3'>
                            <span className='text-4xl sm:text-5xl bg-gray-200 rounded-2xl shrink-0 p-1'>
                                {product.image}
                            </span>

                            <div className='min-w-0'>
                                <p className='font-bold text-lg sm:text-xl'>
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
                                                    ? 'লিটার'
                                                    : category.unit}
                                </small>
                            </div>
                        </div>

                        <h3 className='my-3'>আজকের দাম</h3>

                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='min-w-0'>
                                <span className='text-xl sm:text-2xl font-bold'>
                                    {product.today.toLocaleString('bn-BD')}
                                </span>{' '}
                                টাকা
                            </h3>

                            <p className='text-green-500 shrink-0'>
                                ▼{product.change.pct.toLocaleString('bn-BD')}%
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DecreasePrice;