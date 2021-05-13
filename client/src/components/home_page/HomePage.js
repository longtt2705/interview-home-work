import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/post";
import Post from "./components/Post";

function HomePage() {
  const posts = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.post.loading);
  const error = useSelector((state) => state.post.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      {posts.length === 0 && !loading && <p>No Posts available</p>}
      {error && console.log(error)}
    </div>
  );
}

export default HomePage;
