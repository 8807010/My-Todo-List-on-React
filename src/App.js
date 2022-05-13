import React from 'react';
import {useState} from 'react';
import "./App.scss";
import MyInput from './MyInput';
import MyButton from './MyButton';
import PostList from './PostList';

export function App() {

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // const bodyInputRef = useRef();

    const AddNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
        setBody('')
    }

    
    return (
        <div className="container">

            <form className='app-wrapper'>
                <MyInput
                    className="task-input"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Введите ваш комментарий"
                />

                <MyButton onClick={AddNewPost}>Создать пост</MyButton>
            </form>

            <div className='post-list'>
                <PostList posts={posts} title="Список постов"/>
            </div>

        </div>
    );
}

export default App;
