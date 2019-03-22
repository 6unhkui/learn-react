import React from 'react';

const Post = ({match}) => {
    console.log("Post내 match");
    console.log(match);

    return (
        <div>
            포스트 #{match.params.id}
        </div>
    );
};

export default Post;