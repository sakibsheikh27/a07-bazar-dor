import React from 'react';

const Navbar = async () => {
    const res = await fetch(process.env.CATEGORIES_API_LINK);
    const categories = await res.json();
    return (
        <div className='flex gap-5'>
            {categories.map((category) => (
                    <div key={category.id}>
                        {category.nameBn}
                    </div>
                ))}
        </div>
    );
};

export default Navbar;