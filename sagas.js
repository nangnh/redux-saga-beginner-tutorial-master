import { all, put, takeEvery } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
	console.log('Hello Saga!')
}

export function* incrementAsync() {
	yield delay(1000)
	yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
	yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
	yield all([
		helloSaga(),
		watchIncrementAsync()
	])
}