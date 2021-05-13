import * as type from "../type";

var initialState = {
  posts: [],
  error: null,
  hasMore: true,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_POSTS_REQUESTED:
      return {
        ...state,
      };
    case type.GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        hasMore: action.hasMore,
      };
    case type.GET_POST_FAILED:
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default postReducer;
