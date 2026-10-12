import React from 'react';

const AllProducts = async () => {
    const res = await fetch(process.env.ALL_PRODUCTS_API_LINK);
    const data = await res.json();
    return (
        <div className='mb-15'>
            <div className='max-w-7xl mx-auto my-5'>
                <h2 className='font-bold text-2xl'>সব পণ্য</h2>
                <p>মোট {data.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-3 gap-5'>
                {data.map(product => (
                    <div
                        className='border-2 border-gray-200 bg-white rounded-2xl p-3'
                        key={product.id}>
                        <div className='flex gap-3'>
                            <span className='text-5xl bg-gray-200  rounded-2xl' >{product.image}</span>
                            <div>
                                <p className='font-bold text-xl'>{product.nameBn}</p>
                                <small className=''>
                                    {product.unit === 'kg'
                                        ? 'প্রতি কেজি'
                                        : product.unit === 'piece'
                                            ? 'প্রতি পিস'
                                            : product.unit === 'dozen'
                                                ? 'প্রতি ডজন'
                                                : product.unit}
                                </small>
                            </div>
                        </div>
                        <h3 className='my-3'>আজকের দাম</h3>
                        <div className='flex justify-between items-center'>

                            <div className=''>

                                <h3><span className='text-2xl font-bold'>{product.today.toLocaleString('bn-BD')}</span> টাকা</h3>
                            </div>
                            <div 
                            className={
                                    Number(product.change.pct) > 0
                                        ? 'text-green-600'
                                        : Number(product.change.pct) < 0
                                            ? 'text-red-600'
                                            : 'text-gray-500'
                                }
                            >
                                {Number(product.change.pct) > 0
                                    ? '▲'
                                    : Number(product.change.pct) < 0
                                        ? '▼'
                                        : '-'}

                                {(Number(product.change.pct)).toLocaleString('bn-BD')}% 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;