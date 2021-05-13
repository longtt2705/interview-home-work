import React from "react";
import { Container } from "react-bootstrap";

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
          <b>user.name</b>
        </div>
        <p>
          id ask busy. Reserved opinions fat him nay position. Breakfast as
          zealously incommode do agreeable furniture. One too nay led fanny
          allow plate. Ever man are put down his very. And marry may table him
          avoid. Hard sell it were into it upon. He forbade affixed parties of
          assured to me windows. Happiness him nor she disposing provision. Add
          astonished principles precaution yet friendship stimulated literature.
          State thing might stand one his plate. Offending or extremity
          therefore so difficult he on provision. Tended depart turned not are.
          Effects present letters inquiry no an removed or friends. Desire
          behind latter me though in. Supposing shameless am he engrossed up
          additions. My possible peculiar together to. Desire so better am
          cannot he up before points. Remember mistaken opinions it pleasure of
          debating. Court front maids forty if aware their at. Chicken use are
          pressed removed
        </p>
        <span style={{ fontSize: "10pt" }}>
          <i>Created at: comment.created_at</i>
        </span>
        <hr />
      </div>
    </Container>
  );
}

export default Comments;
