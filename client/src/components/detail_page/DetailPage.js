import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostById } from "../../redux/actions/post";
import Post from "../Post";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

function DetailPage() {
  let { id } = useParams();
  const posts = useSelector((state) => state.post.posts);
  const [post, setPost] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentPost =
      posts.length > 0 ? posts.filter((e) => e._id === id) : [];
    if (currentPost.length > 0) setPost(currentPost[0]);
    else dispatch(getPostById(id));
  }, [dispatch, id, posts]);

  return (
    <Container style={{ height: "100vh" }}>
      {post ? (
        <Post post={post} isTruncated={false} />
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </Container>
  );
}

export default DetailPage;
