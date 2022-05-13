import React from 'react';
import PostItem from "./PostItem";
import "./App.scss";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 className="header-title">{title}</h1>

            {posts.map((post, index) =>
                <PostItem number={index} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;