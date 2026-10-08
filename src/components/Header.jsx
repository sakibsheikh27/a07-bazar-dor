
import Image from 'next/image';
import React from 'react';

const HeaderPage = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full'
    });

    return (
        <div>
            <div className='flex justify-between items-center w-full max-w-7xl mx-auto my-4'>
                <div className='flex gap-5'>
                    <Image
                        className='bg-green-700 text-gray-400 p-2 rounded-md'
                        src={'/assets/logo-icon.png'}
                        width={50} height={50}
                        alt='Image of logo'>
                    </Image>
                    <div>
                        <h2 className='font-bold'>বাজার দর</h2>
                        <small>{date}</small>
                    </div>
                </div>
                <div>
                    <button className='mx-5'>সাইন ইন</button>
                    <button className='bg-green-700 px-3 py-2 rounded-md text-white'>সাইন আপ</button>
                </div>
            </div>
            <hr className='border-gray-100' />
        </div>

    );
};

export default HeaderPage;