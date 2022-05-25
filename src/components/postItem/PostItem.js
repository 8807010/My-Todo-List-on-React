import React from 'react';

export default function PostItem(props) {

  return (
    <div className='app-list-item d-flex justify-content-between'>
      <span className='app-list-utem-label'>
        { props.number + 1}. { props.post.body }
      </span>
    </div>
  )
}