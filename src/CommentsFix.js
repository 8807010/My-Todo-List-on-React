import React from 'react';
import {useState} from 'react';
import './App.scss';

function Comments() {

    const [comment, setComment] = useState([]);

        let inputRef = React.createRef();

        function addMessage() {
            let commentValue = inputRef.current.value;
            let comments = [...comment, commentValue];
            setComment(comments);
            inputRef.current.value = '';
        }

        return (
            <div className="container">
                <div className="app-wrapper">
                    <h1 className="header-title">Please enter your text</h1>
                    <input className="task-input" type="text" placeholder="Enter your message..." ref={inputRef}/>
                    <button className="button" type="submit" onClick={addMessage}> PUSH </button>
                    <div>
                        <ul>
                            {comment.map((item, index) => <li className="list-item" key={index.toString()}> {item} </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
}

export default Comments;

