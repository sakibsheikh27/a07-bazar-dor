import React, { Suspense } from 'react';
import CategoryProducts from './CategoryProduct';
import Link from 'next/link';

const CategoryIdPage = async ({ params }) => {
    const { categoryId } = await params;

    const res = await fetch(`${process.env.SINGLE_CATEGORY_BY_ID_API_LINK}${categoryId}`);
    const categories = await res.json();

    return (
        <div className='max-w-7xl mx-auto my-8'>
            <div className='flex gap-3 items-center py-3 px-2 border-2 border-gray-200 rounded-2xl bg-white'>
                <span className='text-5xl'>{categories[0]?.image}</span>
                <div>
                    <h2 className='text-2xl font-bold'>{categories[0].categoryNameBn}</h2>
                    <p>{categories.length.toLocaleString('bn-BD')}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>
            <div>
                <CategoryProducts categories={categories} />
            </div>
            
        </div>
    );
};

const CategoryId = ({ params }) => {
    return (
        <Suspense fallback={<p>Loading category...</p>}>
            <CategoryIdPage params={params} />
        </Suspense>
    );
};

export default CategoryId;
