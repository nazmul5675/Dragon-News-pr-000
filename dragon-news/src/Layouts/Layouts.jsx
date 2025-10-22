import React from 'react';
import { Outlet, useNavigate, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatesNews from '../Components/LatesNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';
import Loading from '../Components/Loading';

const Layouts = () => {
    const { state } = useNavigation();
    // console.log(state);
    return (
        <div className='poppins container mx-auto'>
            <header>
                <Header></Header>
                <section><LatesNews></LatesNews></section>
                <section><Navbar></Navbar></section>

            </header>

            <main className='my-3 grid grid-cols-12' >

                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    {state == "idle" ? <Outlet></Outlet> : <Loading></Loading>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'><RightAside></RightAside></aside>
            </main>
        </div>
    );
};

export default Layouts;