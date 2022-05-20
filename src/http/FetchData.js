import axios from 'axios'
import React, { useEffect, useState } from 'react'
import"../style.css"

export default function FetchData() {
    const [post, setPost] = useState([])
    const [id, setId] = useState()

    useEffect(()=>{
        axios
            .get(`http://localhost:3001/details/${id}`)
            .then((Response)=>setPost(Response.data))
            .catch((err)=>{
                console.log(err)
            });
    }, [id]);
  return (
    <div className="body">
        <h1>FetchData</h1>
        <div className="grid-container">
          <input type="search" value={id} onChange={(e)=>setId(e.target.value)}/>
          <div class="grid-item">
          Id:&nbsp;{post.id}<br/>
            Name:{post.name}<br/>
            Age:{post.age}<br/>
            Position:{post.position}
          </div>
        </div>
    </div>
  )
}
