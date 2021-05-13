import React, { useState } from "react";
import { Accordion, Badge, Card, Container } from "react-bootstrap";
import moment from "moment";
import Comment from "./Comments";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";

function Post({ post, isTruncated = true }) {
  const content = post.content.split(/\s+/);
  const [isOpen, setOpen] = useState(false);

  return (
    <Container className="d-flex flex-column align-items-center mt-lg-4">
      <Card
        border="light"
        className="shadow-sm w-100"
        style={{ borderRadius: "12px" }}
      >
        <Card.Body>
          <Card.Title className="text-center mb-lg-5">
            <h2>{post.title}</h2>
          </Card.Title>
          <div className="w-100 mb-lg-2">
            <div className="d-inline-block">
              <h6>
                Author: <i>{post.author.username}</i>
              </h6>
              <h6>
                Created at: <i>{moment(post.created_at).format("ll")}</i>
              </h6>
            </div>
            <div className="float-right">
              {post.tags.map((tag, index) => {
                return (
                  <Badge key={index} variant="primary" className="ml-sm-1 p-2">
                    {tag}
                  </Badge>
                );
              })}
            </div>
          </div>
          <Card.Text>
            {isTruncated && content && content.length > 100 ? (
              <div>
                {content.slice(0, 101).join(" ") + " ..."}
                <Link to={`/post/${post._id}`}> Read more</Link>
              </div>
            ) : (
              post.content
            )}
          </Card.Text>
          <Accordion>
            <Card>
              <Card.Header>
                <div
                  onClick={() => setOpen(!isOpen)}
                  style={{ cursor: "pointer" }}
                >
                  {post.comments.length.toString() +
                    (post.comments.length > 1 ? " replies " : " reply ")}
                  <AiOutlineCaretDown />
                </div>
              </Card.Header>

              <Collapse isOpened={isOpen}>
                <div className="mt-lg-4"></div>{" "}
                {post.comments.length > 0 &&
                  post.comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} />
                  ))}
                {post.comments.length === 0 && (
                  <p className="m-3">No comment yet</p>
                )}
              </Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Post;
