import React from 'react';
import { useNavigate } from 'react-router-dom';
import './blog.css';

const Blogs = ({blogs}) => {
    const {imageURL,title,admin,blog,_id} = blogs
    const navigate = useNavigate()
    return (
        <div className='blog'>
            <div className='blog-img'>
                <img src={imageURL} alt="" />
            </div>
            <div className='blog-text'>
                <h1>{title}</h1>
                <h4>Author: {admin}</h4>
                <p>{blog.length > 400 ?blog.slice(0,400):blog}
                <span onClick={()=> navigate(`/blog/${_id}`)} className='read-all-blog'>...Read more</span></p>
            </div>
        </div>
    );
};

export default Blogs;