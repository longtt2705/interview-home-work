import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import commentReducer from "./comment.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  post: postReducer,
  // comment: commentReducer,
  // user: userReducer,
});

export default rootReducer;
