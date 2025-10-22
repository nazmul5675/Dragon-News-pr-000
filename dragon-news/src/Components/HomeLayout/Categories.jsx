import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res => res.json())
const Categories = () => {
    const categories = use(categoryPromise)
    // console.log(categories);
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
            <div className='flex flex-col mr-5'>
                {
                    categories.map(category => <NavLink to={`/category/${category.id}`} className={({ isActive }) => isActive ? "btn border-none text-left font-semibold text-gray-800" : 'border-none btn text-gray-400'} key={category.id}>
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div >
    );
};

export default Categories;