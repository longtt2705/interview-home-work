import React, { useCallback, useEffect } from "react";
import { Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchPosts } from "../../redux/actions/post";
import Post from "../Post";

function SearchPage() {
  const posts = useSelector((state) => state.post.searchPosts.posts);
  const hasMore = useSelector((state) => state.post.searchPosts.hasMore);
  const error = useSelector((state) => state.post.error);
  const dispatch = useDispatch();
  const { search } = useParams();

  useEffect(() => {
    dispatch(searchPosts(search, 0));
  }, [search]);

  const handleNext = useCallback(() => {
    dispatch(searchPosts(search, posts.length));
  }, []);

  return (
    <Container>
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
    </Container>
  );
}

export default SearchPage;
