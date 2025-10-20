import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div className='flex justify-center items-center '><span className="loading loading-ring loading-xl"></span></div>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;