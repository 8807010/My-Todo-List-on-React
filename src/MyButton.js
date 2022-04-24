import React from 'react';
import "./App.scss";


const MyButton = ({children, ...props}) => {
    return (
        <button className='button' {...props}>
            {children}
        </button>
    );
};

export default MyButton;