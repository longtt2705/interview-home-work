import React from "react";
import { Container } from "react-bootstrap";
const moment = require("moment");

function Comments({ comment }) {
  return (
    <Container className="row m-1">
      <div className="col-sm-1">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f94a8fa7-4448-4dd2-b3a8-4c81d3dcdb38/d570lew-5fb146f7-b01b-4f4d-82a7-4c8513616d9f.jpg/v1/fill/w_200,h_200,q_75,strp/_adam_levine_icon_by_imstrongforyou_d570lew-fullview.jpg"
          width="50"
          height="50"
          className="d-inline-block rounded-circle mt-2"
          alt="Logo"
        />
      </div>
      <div className="col-sm">
        <div className="mt-1">
          <b>{comment.owner.username}</b>
        </div>
        <p>{comment.content}</p>
        <span style={{ fontSize: "10pt" }}>
          <i>Created at: {moment(comment.created_at).format("ll")}</i>
        </span>
        <hr />
      </div>
    </Container>
  );
}

export default Comments;
