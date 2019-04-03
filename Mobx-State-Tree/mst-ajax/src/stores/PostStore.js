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
        }, //end doneLoading()

        setPost(data) { // 게시글 데이터 MODEL에 넣어주기
          self.posts = data;
        }, //end setPost()

        setComments(data) { // 댓글 데이터 MODEL에 넣어주기
         self.comments = data;
        }, //end setComments()

        setPostId(num){ // postId 카운트
           self.postId = num; // navigate 클릭시 count되고, count된 값을 postId에 넣어줌
           self.getList(); // getList()에 변경된 postId를 반영
        }, //end setPostId()

        async getList() { // post, comment 서버 통신
           // async, await를 이용해 비동기적으로 데이터를 받아와 동기적으로 뿌려준다
           try {
              const getPost = await axios.get('https://jsonplaceholder.typicode.com/posts?id='+self.postId);
              const getComment = await axios.get('https://jsonplaceholder.typicode.com/comments?postId='+self.postId);

              self.doneLoading(false);
              self.setPost(getPost.data);
              self.setComments(getComment.data);
           }catch (error) {
              console.log(error);
           }
        } //end getList()
    }));

    
export default PostStore;