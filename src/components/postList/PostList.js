import React from 'react';
import PostItem from '../postItem/PostItem';

export default function PostList({ posts }) {

        return (
        <div>
            <h1>Дополните список</h1>

            {posts.map((post, index) =>
                <PostItem
                    post={post}
                    key={post.id}
                    number={index}
                />
            )}
        </div>

    );
};
