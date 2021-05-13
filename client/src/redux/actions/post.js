import * as type from "../type";
import { LIMIT } from "../../configs/config";

export function getPosts(offset, limit = LIMIT) {
  return {
    type: type.GET_POSTS_REQUESTED,
    payload: {
      limit: limit,
      offset: offset,
    },
  };
}
