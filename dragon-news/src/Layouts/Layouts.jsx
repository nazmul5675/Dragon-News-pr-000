import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatesNews from '../Components/LatesNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const Layouts = () => {
    return (
        <div className='poppins container mx-auto'>
            <header>
                <Header></Header>
                <section><LatesNews></LatesNews></section>
                <section><Navbar></Navbar></section>

            </header>

            <main className='my-3 grid grid-cols-12' >

                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'><RightAside></RightAside></aside>
            </main>
        </div>
    );
};

export default Layouts;