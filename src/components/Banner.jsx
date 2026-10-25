'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Banner = () => {

    const [date, setDate] = useState('');

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' }); setDate(currentDate);
    }, []);
    return (
   
<div className="flex flex-col md:flex-row justify-between items-center gap-5 max-w-7xl mx-auto p-4 sm:p-5 border-2 border-gray-200 rounded-2xl bg-white mt-5">

    {/* Left Content */}
    <div className="w-full md:w-1/2 lg:w-3/5">
        <span className="bg-green-200 rounded-md px-2 py-1 text-green-700 font-bold text-sm">
            {date}
        </span>

        <h2 className="font-bold text-2xl sm:text-3xl my-3">
            আজকের বাজারের দাম এক নজরে
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-4 leading-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition">
            সব পণ্য দেখুন
        </button>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/2 flex justify-center">
        <Image
            src="/images/bazar-hero.png"
            width={300}
            height={300}
            alt="Banner image"
            className="w-full max-w-62.5 sm:max-w-75 h-auto object-contain"
        />
    </div>

</div>


    );
};

export default Banner;