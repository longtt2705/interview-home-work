import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as type from "../type";

function getApi(url) {
  return axios
    .get(url, {})
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
}

function* getPosts() {
  try {
    const posts = yield call(getApi, "/posts/");
    yield put({ type: type.GET_POST_SUCCESS, posts: posts });
  } catch (e) {
    yield put({ type: type.GET_POST_FAILED, message: e.message });
  }
}

function* postSaga() {
  yield takeEvery(type.GET_POSTS_REQUESTED, getPosts);
}

export default postSaga;
