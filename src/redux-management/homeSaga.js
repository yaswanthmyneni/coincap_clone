import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getDataFailure, getDataSuccess } from "./slices/homeSlice/homeSlice";

function* fetchData() {
  try {
    const response = yield call(() =>
      axios.get("https://api.coincap.io/v2/assets")
    );
    yield put(getDataSuccess(response.data.data));
  } catch (error) {
    yield put(getDataFailure(error.message));
  }
}

function* homeSaga() {
  yield takeEvery("home/getDataFetch", fetchData);
}

export { homeSaga };
