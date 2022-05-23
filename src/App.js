import React from 'react';
import "./App.scss";
import PostList from './components/postList/PostList';
import CreateToDo from './components/createToDo/CreateToDo';


export function App() {

    return (
        <div className="container" >
            <CreateToDo />
            <PostList />
        </div>
    );
}

export default App;