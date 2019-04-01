import { Post, PostStore } from './PostStore';

it("can create a instance of a model", () => {
    const post = Post.create({
        userId : 1,
        id : 1,
        title : 'types.string',
        body : 'types.string'   
    })

    expect(post.userId).toBe(1);
    expect(post.title).toBe('types.string');
});

it("can create a postList", () => {
   const postStore = PostStore.create();
   postStore.setPostList({
        userId : 1,
        id : 1,
        title : 'types.string',
        body : 'types.string'   
       }
   )

   postStore.getPosts();
   expect(postStore.posts.length).toBe(1);
   expect(postStore.isLoading).toBe(true);
})