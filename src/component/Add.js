import React, { useState } from 'react'

export const Add = ({data}) => {
    const [note,setNote]=useState("")
    const [item,setItem]=useState([])
  
  return (
    <div>
         <input value={note} onChange={(e)=>setNote(e.target.value)}/>
         <button onClick={()=>setItem([...item,note])}>Add Post</button>

{item}


    </div>
  )
}
