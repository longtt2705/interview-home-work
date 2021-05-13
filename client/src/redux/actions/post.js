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

export function getPostById(id) {
  return {
    type: type.GET_POST_BY_ID_REQUESTED,
    payload: {
      id: id,
    },
  };
}

export function searchPosts(searchValue, offset, limit = LIMIT) {
  return {
    type: type.SEARCH_POSTS_REQUESTED,
    payload: {
      value: searchValue,
      limit: limit,
      offset: offset,
    },
  };
}
