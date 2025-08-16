import React, { useState, useEffect, useCallback } from "react";
import Post from "./components/Post";

function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addPost = useCallback(() => {
    if (title && body) {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: Date.now(), title, body },
      ]);
      setTitle("");
      setBody("");
    }
  }, [title, body]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Optimization Demo</h1>
      <p>Timer: {timer}s</p>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div>
        {posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
