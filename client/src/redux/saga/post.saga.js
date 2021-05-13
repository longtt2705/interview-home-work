import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import * as type from "../type";

function getApi(url, params) {
  return axios
    .get(url, {
      params: params,
    })
    .then((respone) => respone.data)
    .catch((e) => {
      throw e;
    });
}

function* getPostsWorker(action) {
  console.log(action.payload);
  try {
    const res = yield call(getApi, "/posts", action.payload);
    yield put({
      type: type.GET_POSTS_SUCCESS,
      posts: res.posts,
      hasMore: res.hasMore,
    });
  } catch (e) {
    yield put({ type: type.GET_POSTS_FAILED, message: e.message });
  }
}

function* getPostByIdWorker(action) {
  console.log(action.payload);

  try {
    const post = yield call(getApi, `/posts/${action.payload.id}`);
    yield put({
      type: type.GET_POST_BY_ID_SUCCESS,
      post: post,
    });
  } catch (e) {
    yield put({ type: type.GET_POSTS_FAILED, message: e.message });
  }
}

function* getPostsByTitleWorker(action) {
  console.log(action.payload);
  try {
    const res = yield call(
      getApi,
      `/posts/search/?search=${action.payload.value}`,
      action.payload
    );
    yield put({
      type: type.GET_SEARCH_POSTS_SUCCESS,
      posts: res.posts,
      hasMore: res.hasMore,
    });
  } catch (e) {
    yield put({ type: type.GET_POSTS_FAILED, message: e.message });
  }
}

export function* getPostsWatcher() {
  yield takeLatest(type.GET_POSTS_REQUESTED, getPostsWorker);
}

export function* getPostsByTitleWatcher() {
  yield takeLatest(type.SEARCH_POSTS_REQUESTED, getPostsByTitleWorker);
}

export function* getPostByIdWatcher() {
  yield takeLatest(type.GET_POST_BY_ID_REQUESTED, getPostByIdWorker);
}
