// BlogList.js

'use client'
import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/Components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

function BlogList() {
    const [data, setData] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const blogs =
            JSON.parse(localStorage.getItem('myData') || '[]');
        setData(blogs);
    }, []);



    const toggleExpanded = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    let filteredData = data;
    if (searchQuery.trim() !== '') {
        filteredData = data.filter(item =>
            item.title.toLowerCase()
                .includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div>
            <Navbar />
            <div className="container bg-light"
                style={{ marginTop: '5rem' }}>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="row">
                    {
                        filteredData.map((item) => (
                            <div key={item.id} className="col-md-4">
                                <div className="card mb-3">
                                    <Image
                                        src={item.imageUrl}
                                        className="card-img-top"
                                        alt="Blog"
                                        width={400}
                                        height={250}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {item.title}
                                        </h5>
                                        <p className="card-text">
                                            {expandedId === item.id
                                                ? item.description
                                                : `${item.description.substring(0, 50)}...`}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted">
                                                {item.date}
                                            </small>
                                            <Link href={`/blog/${item.id}`}>
                                                <button className='btn btn-primary'>
                                                    Read more
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default BlogList;