import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
    // console.log(id);
    const data = useLoaderData();
    // console.log(data);
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        } else if (id == '1') {
            const filterNews = data.filter(news => news.others.is_today_pick == true)
            // console.log(filterNews);
            setCategoryNews(filterNews)
        } else {
            const filterNews = data.filter(news => news.category_id == id)
            // console.log(filterNews);
            setCategoryNews(filterNews)
        }

    }, [data, id])
    return (
        <div>
            <h2 className='font-bold'>Total ({categoryNews.length}) News Found</h2>


            <div className='grid grid-cols-1'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;