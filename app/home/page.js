'use client'

import { getPosts } from "@/_actions/postAction";
import { useState, useEffect } from 'react';

import Forma from "../components/forma";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [errMsg, setErrMsg] = useState(null);
  
    const fetchPosts = async () => {
      const { data, errMsg } = await getPosts();
      if (errMsg) {
        setErrMsg(errMsg);
      } else {
        setPosts(data);
      }
    };
  
    useEffect(() => {
      fetchPosts();
    }, []);

  return (
    <main>
      <Forma refreshPosts={fetchPosts} />
      {
        posts.map(item => (
          <div className="div-pitanje" key={item._id}>
            <p>Ime: {item.ime}</p> 
            <p>Email: {item.email}</p> 
            <p>Tip pitanja: {item.tip}</p> 
            <p>Pitanje: {item.poruka}</p> 
          </div>
        ))
      }
    </main>
  );
}
