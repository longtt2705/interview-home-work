import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as type from "../type";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function getApi() {
  return axios
    .get(apiUrl, {})
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
}

function* getPosts() {
  try {
    const posts = yield call(getApi);
    yield put({ type: type.GET_POST_SUCCESS, posts: posts });
  } catch (e) {
    yield put({ type: type.GET_POST_FAILED, message: e.message });
  }
}

function* postSaga() {
  yield takeEvery(type.GET_POSTS_REQUESTED, getPosts);
}

export default postSaga;
