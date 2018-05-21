import React from 'react';

const PostIdeaButton = () => (
    <div className="newidea">
        <p>Post your ideas to shape the future of this product. Upvote others if you <span role="img" aria-label="heart">😍</span> them!</p>
        <a className="button base block" modal-toggle="post-idea">Post New Idea...</a>
    </div>
);

export default PostIdeaButton;
