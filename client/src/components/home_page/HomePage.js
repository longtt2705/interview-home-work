import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/post";
import Post from "./components/Post";
import InfiniteScroll from "react-infinite-scroll-component";

function HomePage() {
  const posts = useSelector((state) => state.post.posts);
  const hasMore = useSelector((state) => state.post.hasMore);
  const error = useSelector((state) => state.post.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(0));
  }, [dispatch]);
  localStorage.clear();

  return (
    <InfiniteScroll
      dataLength={posts.length} //This is important field to render the next data
      next={() => dispatch(getPosts(posts.length))}
      hasMore={hasMore}
      loader={<div className="text-center mt-lg-4">Loading...</div>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b> You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
    >
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} post={post} />)}
      {posts.length === 0 && <p>No Posts available</p>}
      {error && console.log(error)}
    </InfiniteScroll>
  );
}

export default HomePage;
