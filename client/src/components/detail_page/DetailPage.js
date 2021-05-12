import React from "react";
import { useParams } from "react-router";

function DetailPage(props) {
  let { id } = useParams();

  return <div>{id}</div>;
}

export default DetailPage;
