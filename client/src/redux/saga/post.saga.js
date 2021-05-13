import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
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

function* getPosts(action) {
  try {
    const res = yield call(getApi, "/posts/", action.payload);
    yield put({
      type: type.GET_POST_SUCCESS,
      posts: res.posts,
      hasMore: res.hasMore,
    });
  } catch (e) {
    yield put({ type: type.GET_POST_FAILED, message: e.message });
  }
}

function* postSaga() {
  yield takeEvery(type.GET_POSTS_REQUESTED, getPosts);
}

export default postSaga;
