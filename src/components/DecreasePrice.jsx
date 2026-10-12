import React from 'react';

const DecreasePrice = async() => {
    const res = await fetch(process.env.ALL_PRODUCTS_API_LINK);
    const data = await res.json();
    const downProducts = data.filter(product => product.change.dir === 'down').sort((a, b) => b.change.ptc - a.change.ptc).slice(0, 6);

    return (
        <div>
            <h2 className='max-w-7xl mx-auto my-5'><span className='text-green-500'>▼</span> <span className='font-bold text-2xl'>আজ দাম কমেছে</span></h2>
            <div className='max-w-7xl mx-auto grid grid-cols-3 gap-5'>
                {downProducts.map(product => (
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
                            <p className='text-green-500'>▼{product.change.pct.toLocaleString('bn-BD')}% </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DecreasePrice;