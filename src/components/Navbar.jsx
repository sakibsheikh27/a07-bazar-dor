import Link from 'next/link';
import React from 'react';

const Navbar = async () => {
    const res = await fetch(process.env.CATEGORIES_API_LINK);
    const categories = await res.json();
    return (

        <div className="w-full">
            <div className="flex gap-5 max-w-7xl mx-auto my-3 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="flex items-center gap-2 shrink-0"
                    >
                        <span>{category.icon}</span>
                        <span>{category.nameBn}</span>
                    </Link>
                ))}
            </div>

            <hr className="border-gray-100" />
        </div>


    );
};

export default Navbar;