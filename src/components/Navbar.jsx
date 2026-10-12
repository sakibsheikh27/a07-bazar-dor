import Link from 'next/link';
import React from 'react';

const Navbar = async () => {
    const res = await fetch(process.env.CATEGORIES_API_LINK);
    const categories = await res.json();
    return (
        <div>
            <div className='flex gap-5 max-w-7xl mx-32 my-3'>
                {categories.map((category) => (
                    <Link key={category.id} href={`/category/${category.slug}`}>
                        {category.icon}
                        {category.nameBn}
                    </Link>
                ))}
            </div>
            <hr className='border-gray-100' />
        </div>
    );
};

export default Navbar;