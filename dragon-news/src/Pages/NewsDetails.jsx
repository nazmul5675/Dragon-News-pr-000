import { useLoaderData, useParams } from 'react-router';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useEffect, useState } from 'react';

const NewsDetails = () => {
    const { id } = useParams();

    const data = useLoaderData();
    const [newsDetails, setNewsDetails] = useState({})
    useEffect(() => {
        const newsData = data.find(item => item.id === id)
        setNewsDetails(newsData)
    }, [data, id])


    return (
        <div className='container mx-auto'>
            <title>Dragon News | News Details</title>
            <Header></Header>
            <main className='grid grid-cols-12'>

                <section className='col-span-9'>
                    <h2 className='text-xl font-semibold'>Dragon News</h2>

                    <NewsDetailsCard newsDetails={newsDetails}></NewsDetailsCard>



                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;