import React, { Suspense } from 'react';

const CategoryIdPage = async({params}) => {
    const { categoryId } = await params;

    const res = await fetch(`${process.env.SINGLE_CATEGORY_BY_ID_API_LINK}${categoryId}`);
    const categories = await res.json();

    return (
        <div>
            {categories.map(category => (
                <div key={category.id}>
                    <h2>{category.nameBn}</h2>
                </div>
            ))}
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
