import { types } from "mobx-state-tree";
import axios from 'axios';

const Post = types.model('Post', {
       userId : types.number,
       id : types.number,
       title : types.string,
       body : types.string     
    });

const PostStore = types.model('PostStore', {
       postData : types.array(Post)
    })
    .actions(self => ({
        setData(data) {
          //self.postData.push(data);
          console.log(data);  
        },
        getData() {
           axios.get('https://jsonplaceholder.typicode.com/posts')
           .then( response => {
              self.setData(response.data)
           }) 
        }
    }));

export default PostStore;