import React, { Component } from 'react';
import { PostWrapper, Navigator, Post } from '../components';
import { observer,inject } from 'mobx-react';

@inject('store')
@observer
class PostPage extends Component {
    
    componentDidMount() {
        console.log('componentDidMount-----------');
        //this.props.store.getPostList();
        //this.props.store.getCommentList();
        this.props.store.getList();
    }

    handleNavigateClick = (type) => {
        const {postId} = this.props.store;

        if(type === 'NEXT') {
            this.props.store.setPostId(postId+1);
        } else {
            if(postId > 1) this.props.store.setPostId(postId-1);
        }
    }

    _renderPost = () => { 
        console.log(' _renderPost-----------');
        
        const posts = this.props.store.posts.map((post, index) => {
            return <Post body={post.body} title = {post.title} key={index}/>
        })
     
        return posts;
    } 

    render() {
        const {isLoading, postId} = this.props.store;

        return (
            <div>
            <PostWrapper>
                <Navigator postId={postId} onClick={this.handleNavigateClick} />
                {isLoading? 'Loading' : this._renderPost()}
            </PostWrapper>
            </div>
        );
    }
}

export default PostPage;