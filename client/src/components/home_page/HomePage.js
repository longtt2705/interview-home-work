import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/post";
import Post from "../Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function HomePage() {
  const posts = useSelector((state) => state.post.posts);
  const hasMore = useSelector((state) => state.post.hasMore);
  const error = useSelector((state) => state.post.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(0));
  }, []);

  const handleNext = useCallback(() => {
    dispatch(getPosts(posts.length));
  }, []);

  return (
    <InfiniteScroll
      dataLength={posts.length} //This is important field to render the next data
      next={handleNext}
      hasMore={hasMore}
      loader={
        <div className="text-center mt-lg-4">
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        </div>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b> You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
    >
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} post={post} />)}
      {posts.length === 0 && (
        <p style={{ textAlign: "center" }}>
          <b> No Post available</b>
        </p>
      )}
      {error && console.log(error)}
    </InfiniteScroll>
  );
}

export default HomePage;
