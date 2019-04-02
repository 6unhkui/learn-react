import { types } from "mobx-state-tree";
import axios from 'axios';

const Post = types
    .model('Post', {
       userId : types.number,
       id : types.identifierNumber,
       title : types.string,
       body : types.string  
    }
);

const comment = types
     .model('comment', {
        postId : types.identifierNumber,
        id : types.number,
        name : types.string,
        email : types.string,
        body : types.string
     }
);

const PostStore = types
    .model({
       postId : types.optional(types.number, 1),
       posts : types.optional(types.array(Post), []),
       comments : types.optional(types.array(comment), []),
       isLoading : true
    })
    .actions(self => ({
        doneLoading(loading) { // 로딩
           self.isLoading = loading;
        },

        setPost(data) { // 게시글 데이터 MODEL에 넣어주기
          self.posts = data;
        },

        setPostId(num){ // postId 카운트
           self.postId = num; // navigate 클릭시 count되고, count된 값을 postId에 넣어줌
           self.getList(); //List 반영
        },

        setCommentsList(data) { // 댓글 데이터 MODEL에 넣어주기
          self.comments = data;
        },
        
        getList() { // 게시글 데이터 받기
           console.log('store getListAPI');
           
           axios.get(`https://jsonplaceholder.typicode.com/posts?id=${self.postId}`)
             .then((response) => {
                self.doneLoading(false);
                self.setPost(response.data);
             })
             .catch( err => console.log(err));

           axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${self.postId}`)
             .then((response) => {
                self.setCommentsList(response.data);
             })
             .catch( err => console.log(err));
        }
    }));

    
export default PostStore;