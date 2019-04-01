import { types } from "mobx-state-tree";
import axios from 'axios';

const Post = types
    .model('Post', {
       userId : types.number,
       id : types.number,
       title : types.string,
       body : types.string  
    }
);

const comment = types
     .model('comment', {
        postId : types.number,
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
    .views(self => ({
       get total() {
          return self.posts.length;
       }
    }))
    .actions(self => ({
        doneLoading(loading) { // 로딩
           self.isLoading = loading;
        },

        setPost(data) { // 게시글 데이터 MODEL에 넣어주기
          self.posts = data;
        },

        setPostId(num){
           self.postId = num;
           self.getList(num);
        },

        setCommentsList(data) { // 댓글 데이터 MODEL에 넣어주기
          self.comments = [...data];
        },

        getList(postId) {
           self.getPostsAPI(postId);
           self.getCommentAPI(postId);
        },

        getPostsAPI(postId) { // 게시글 데이터 받기
           axios.get('https://jsonplaceholder.typicode.com/posts?id='+postId)
             .then((response) => {
                self.doneLoading(false);
                self.setPost(response.data);
             })
             .catch( err => console.log(err));
        },

        getCommentAPI(postId) { // 게시글 번호에 맞는 댓글 데이터 받기
         axios.get('https://jsonplaceholder.typicode.com/comments?postId='+postId)
            .then((response) => {
               self.doneLoading(false);
               self.setCommentsList(response.data);
            })
            .catch( err => console.log(err));
        }
    }));

    
export default PostStore;