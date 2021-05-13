import { all } from "@redux-saga/core/effects";
import {
  getPostByIdWatcher,
  getPostsByTitleWatcher,
  getPostsWatcher,
} from "./post.saga";

export function* rootSaga() {
  yield all([
    getPostByIdWatcher(),
    getPostsWatcher(),
    getPostsByTitleWatcher(),
  ]);
}
