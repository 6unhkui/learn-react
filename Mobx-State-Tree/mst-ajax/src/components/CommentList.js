import React from 'react';
import { observer,inject } from 'mobx-react';
import Comment from './Comment';
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
           {console.log('CommentList render')}
           {commentList}
        </ul>
    );
};

export default inject(({store}) => ({
    comments: store.comments
  }))(observer(CommentList));