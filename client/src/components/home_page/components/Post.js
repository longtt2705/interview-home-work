import React, { useState } from "react";
import { Accordion, Badge, Card, Container } from "react-bootstrap";
import moment from "moment";
import Comment from "./Comments";
import { Collapse } from "react-collapse";

function Post({ post }) {
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
              <Badge variant="primary" className="ml-sm-1 p-2">
                New
              </Badge>
              <Badge variant="primary" className="ml-sm-1 p-2">
                New
              </Badge>
              <Badge variant="primary" className="ml-sm-1 p-2">
                New
              </Badge>
              <Badge variant="primary" className="ml-sm-1 p-2">
                New
              </Badge>
            </div>
          </div>
          <Card.Text>
            {content && content.length > 100
              ? content.slice(0, 101).join(" ") + " ..."
              : post.content}
          </Card.Text>
          <Accordion>
            <Card>
              <button onClick={() => setOpen(!isOpen)}></button>
              <Collapse isOpened={isOpen}>
                {" "}
                {post.comments.length > 0 &&
                  post.comments.map((comment) => (
                    <Comment key={comment._id} comment={comment.content} />
                  ))}
                {post.comments.length === 0 && <p>No comment yet</p>}
              </Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Post;
