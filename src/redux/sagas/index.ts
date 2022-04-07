// dependencies
import { all, fork } from 'redux-saga/effects';

// sagas
import * as dashboardSaga from '../dashboard/dashboardSaga';

export default function* rootSaga() {
    yield all([...Object.values(dashboardSaga).map(fork)]);
}
