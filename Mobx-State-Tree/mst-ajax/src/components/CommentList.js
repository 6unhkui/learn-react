import React from 'react';
import {Comment} from './';
import './CommentList.css';

const CommentList = ({comments}) => {
    const commentList = comments.map((comment, index) => (
        <Comment
           key={index}
           name = {comment.name}
           body = {comment.body} 
        />
      ));

    return (
        <ul className="CommentList">
           {commentList}
        </ul>
    );
};


export default CommentList;