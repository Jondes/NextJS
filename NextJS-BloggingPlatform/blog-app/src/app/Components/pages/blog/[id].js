// pages/[id].js

import React,{useEffect,useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import Navbar from '@/Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogDetails = () => {

    const [blogDetail, setBlogDetail] = useState(null);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (!id) return;
        const data = localStorage.getItem('myData');
        const blogs = data ? JSON.parse(data) : [];
        const selectedBlog = blogs.find(blog => blog.id === parseInt(id));
        setBlogDetail(selectedBlog || null);
    }, [id]);


    if (!blogDetail) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="card">
                <Image
                    src={blogDetail?.imageUrl || '/placeholder.png'}
                    width={1200}
                    height={300}
                    className="card-img-top"
                    alt={blogDetail?.title || 'Blog'}
                />
                <div className="card-body">
                    <h1 className="card-title">{blogDetail.title}</h1>
                    <p className="card-text">
                        {blogDetail.description}
                    </p>
                    <p className="card-text">
                        Author: {blogDetail.author}
                    </p>
                    <p className="card-text">Date: {blogDetail.date}</p>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;