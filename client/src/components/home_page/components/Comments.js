import React from "react";
import { Container } from "react-bootstrap";

function Comments({ comment, user }) {
  return (
    <Container>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f94a8fa7-4448-4dd2-b3a8-4c81d3dcdb38/d570lew-5fb146f7-b01b-4f4d-82a7-4c8513616d9f.jpg/v1/fill/w_200,h_200,q_75,strp/_adam_levine_icon_by_imstrongforyou_d570lew-fullview.jpg"
        width="30"
        height="30"
        className="d-inline-block rounded-circle"
        alt="Logo"
      />
      <b>{user.name}</b>
      <p>{comment.content}</p>
      <i>Created at: {comment.created_at}</i>
    </Container>
  );
}

export default Comments;
