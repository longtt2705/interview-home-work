import * as type from "../type";

export function getPosts() {
  return {
    type: type.GET_POSTS_REQUESTED,
    payload: null,
  };
}
