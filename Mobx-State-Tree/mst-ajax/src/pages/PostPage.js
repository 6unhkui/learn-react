import React, { Component } from 'react';
import { PostWrapper, Navigator, Post } from '../components';
import { observer,inject } from 'mobx-react';

@inject('store')
@observer
class PostPage extends Component {

    componentWillMount() {
        this.props.store.getList(1);
    }

    handleNavigateClick = (type) => {
        const {postId} = this.props.store;

        if(type === 'NEXT') {
            this.props.store.setPostId(postId+1);
        } else {
            this.props.store.setPostId(postId-1);
        }
    }

    _renderPost = () => { 
        const content = this.props.store.posts[0];
        const {comments} = this.props.store;
        console.log('content');
        const posts = this.props.store.posts.map(() => {
            return <Post contents = {content} comments = {comments} key={content.id}/>
        })
     
        return posts;
    } 

    render() {
        const {isLoading, postId} = this.props.store;

        return (
            <>
            <PostWrapper>
                <Navigator postId={postId} onClick={this.handleNavigateClick} />
                {isLoading? 'Loading' : this._renderPost()}
            </PostWrapper>
            </>
        );
    }
}

export default PostPage;