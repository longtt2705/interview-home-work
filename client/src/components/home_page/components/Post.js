import React from "react";
import { Accordion, Badge, Card, Container } from "react-bootstrap";
import Comments from "./Comments";

function Post({ post, comments }) {
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
                Author: <i>{post.author}</i>
              </h6>
              <h6>
                Created at: <i>{post.created_at}</i>
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
          <Card.Text>{post.content}</Card.Text>
          {/* <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                {comments.length} replies
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                {comments.length > 0 &&
                  comments.map((comment) => (
                    <Comments key={comment.id} comment={comment} />
                  ))}
                {comments.length === 0 && <p>No comment yet</p>}
              </Accordion.Collapse>
            </Card>
          </Accordion> */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Post;
