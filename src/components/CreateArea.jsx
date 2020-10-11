import React from 'react'
import './CreateArea.css'
export default function CreateArea() {
    return (
    <div>
        <form>
          <input name="title" placeholder="Title" />
          <button className='close'>X</button>
          <textarea name="content" placeholder="Take a note..." rows="3" />
          <button className='add'>+</button>
        </form>
    </div>
    )
}
