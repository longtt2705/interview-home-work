import * as type from "../type";

var initialState = {
  posts: [],
  error: null,
  hasMore: true,
  searchPosts: {
    posts: [],
    hasMore: true,
    loading: false,
  },
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_POSTS_REQUESTED:
      return {
        ...state,
      };
    case type.GET_POST_BY_ID_REQUESTED:
      return {
        ...state,
      };
    case type.SEARCH_POSTS_REQUESTED:
      return {
        ...state,
        searchPosts: { ...state.searchPosts, loading: true },
      };
    case type.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        hasMore: action.hasMore,
      };
    case type.GET_SEARCH_POSTS_SUCCESS:
      return {
        ...state,
        searchPosts: {
          posts: action.posts,
          hasMore: action.hasMore,
          loading: false,
        },
      };
    case type.GET_POSTS_FAILED:
      return {
        ...state,
        searchPosts: { ...state.searchPosts, loading: false },
        error: action.message,
      };

    case type.GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };

    default:
      return state;
  }
};

export default postReducer;
