import React from 'react';
import "./App.scss";

const PostItem = (props) => {
    return (
            <div className='list-item '>
                <div>
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
            </div>
    );
};

export default PostItem;