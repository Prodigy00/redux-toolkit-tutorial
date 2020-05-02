import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPosts,
  getOnePost,
  getPostsFromApi,
  selectPosts,
  selectOnePost,
  updatePostNum,
  postNumber,
} from "./postsSlice";

import styles from "./Posts.module.css";

export function Post() {
  const allPosts = useSelector(selectPosts);
  const selectedPost = useSelector(selectOnePost);
  const selectedPostNumber = useSelector(postNumber);
  const [postId, setPostId] = useState(1);
  const dispatch = useDispatch();

  console.log({ all: allPosts, selectedPost, selectedPostNumber });

  useEffect(() => {
    dispatch(getPostsFromApi());
  }, []);

  const handlePostSelection = (postId) => {
    dispatch(updatePostNum(postId));
    dispatch(getOnePost(postId));
  };

  const renderPosts = () => {
    return allPosts.map((post) => {
      return (
        <div key={post.id} className={styles.row}>
          <div className={styles.col}>id:{post.id}</div>
          <div className={styles.col}>userId:{post.userId}</div>
          <div className={styles.col}>title:{post.title}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Posts</h1>
      <div style={{ display: "flex" }}>
        <div>{renderPosts()}</div>
        <div>
          <div style={{ margin: 20 }}>
            <input value={postId} onChange={(e) => setPostId(e.target.value)} />
            <button onClick={() => handlePostSelection(Number(postId - 1))}>
              Select Post
            </button>
          </div>

          <div style={{ maxWidth: 300 }}>
            <h1>Selected Post</h1>
            <p style={{ color: "red" }}>Id:{selectedPost.id}</p>
            <p style={{ color: "green" }}>Title:{selectedPost.title}</p>
            <p style={{ color: "blue" }}>Body:{selectedPost.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
