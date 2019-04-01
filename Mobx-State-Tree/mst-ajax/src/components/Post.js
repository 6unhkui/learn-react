import React from 'react';
import './Post.css';
import {CommentList} from './';

const Post = ({ contents, comments }) => (
    <div className="Post">
        <h1>{contents.title}</h1>
        <p>
        {contents.body}
        </p>
        <CommentList comments = {comments}/>
    </div>
);

export default Post;