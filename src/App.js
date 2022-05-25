import React, { useState } from 'react';
import './App.scss';
import PostList from './components/postList/PostList';
import CreateToDo from './components/createToDo/CreateToDo';


export function App() {

    const [posts, setPosts] = useState([
        { body: 'Выучить html', id: 1 },
        { body: 'Выучить css', id: 2 },
        { body: 'Выучить js...', id: 3 },
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    return (
        <div className="container" >
            <CreateToDo create={createPost} />
            <PostList posts={posts} />
        </div>
    );
}

export default App;