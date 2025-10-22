import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayOuts = () => {
    return (
        <div className='container mx-auto'>
            <header>

                <Navbar></Navbar>

            </header>

            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayOuts;