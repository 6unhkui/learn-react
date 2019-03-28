import { types } from "mobx-state-tree";
import axios from 'axios';

const Post = types.model('Post', {
       userId : types.number,
       id : types.identifier(types.number),
       title : types.string,
       body : types.string     
    }
);

const PostStore = types.model('PostStore', {
       posts : types.array(Post),
       isLoading : true
    })
    .actions(self => ({
        doneLoading(loading) {
           self.isLoading = loading;
        },
        setPostList(data) {
          data.map(post => self.posts.push(post));
        },
        getPosts() {
           axios('https://jsonplaceholder.typicode.com/posts')
             .then((response) => {
                self.doneLoading(false);
                self.updatePostList(response.data);
             })
        }, 
    }));

export default PostStore;