'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Banner = () => {

    const [date, setDate] = useState('');

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' }); setDate(currentDate);
    }, []);
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto border border-red-400 bg-white'>
            <div className='w-96'>
                <span className='bg-green-200 rounded-md px-1 text-green-700 font-bold'>{date}</span>
                <h2 className='font-bold text-3xl my-3'>আজকের বাজারের দাম এক নজরে</h2>
                <p className='text-gray-500 mb-3'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <button>সব পণ্য দেখুন</button>
            </div>
            <div>
                <Image src={'/images/bazar-hero.png'} width={300} height={300} alt='Banner image'></Image>
            </div>
        </div>
    );
};

export default Banner;