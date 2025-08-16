import React, { useState, useMemo, useCallback } from "react";
const Post = React.memo(({ id, title, body }) => {
const [verifyPost, setVerifyPost] = useState(false);
 const bgColor = useMemo(
    () =>
      `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`,
    []
  );
  const toggleVerify = useCallback(() => {
    setVerifyPost((prev) => !prev);
  }, []);

  console.log(`Rendering Post ${id}`);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "15px",
        margin: "10px 0",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={toggleVerify}>
        {verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
});

export default Post;
