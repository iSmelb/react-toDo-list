import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/app.css'

function App() {
  const [posts, setProps] = useState([
    { id: 1, title: 'JavaScript', body: 'description' },
    { id: 2, title: 'JavaScript', body: 'description' },
    { id: 3, title: 'JavaScript', body: 'description' },
  ])

  return (
    <div className="App">
      {posts.map((post )=>
        <PostItem post={post} key={post.id} />
      )}
    </div>
  );
}

export default App;