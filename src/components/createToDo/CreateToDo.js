import React, { useState } from 'react'

export default function CreateToDo ({ create }) {

  const [post, setPost] = useState({ body: '' });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ body: '' })
  }

  return (

    <form>
      <input
        value={post.body}
        type='text'
        onChange={event => setPost({...post, body: event.target.value})}
        placeholder='О чем вы думаете сейчас'
        className='form-control new-post-label'
      />

      <button
        onClick={addNewPost}
        type='submit'
        className='btn btn-outline-secondary'>
        Добавить
      </button>
    </form>
  )
}
