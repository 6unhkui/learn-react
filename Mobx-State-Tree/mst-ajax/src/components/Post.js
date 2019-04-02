import React from 'react';
import './Post.css';
import {CommentList} from './';

const Post = ({ body, title }) => {
    return (
    <div className="Post">
        <h1>{title}</h1>
        <p>
        {body}
        </p>
        <CommentList/>
    </div>
    )
};

export default Post;