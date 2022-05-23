import React from 'react';
import PostListItem from './../postItem/PostItem';

export default function PostList() {
    return (
        <ul className='app-list list-group'>
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    )
}
