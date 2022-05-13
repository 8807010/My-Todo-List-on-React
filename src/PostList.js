import React from 'react';
import PostItem from "./PostItem";
import "./App.scss";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 className="header-title" style={{textAlign: "center"}}>{title}</h1>

            {posts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;