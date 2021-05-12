import * as type from "../type";

var initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_POSTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_POST_SUCCESS:
      return { ...state, loading: false, posts: action.posts };
    case type.GET_POST_FAILED:
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default postReducer;
