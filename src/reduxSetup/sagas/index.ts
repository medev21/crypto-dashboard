// dependencies
import { all, fork } from 'redux-saga/effects';

// sagas
import * as dashboardSaga from 'reduxSetup/dashboard/dashboardSaga';
import * as favortiesSaga from 'reduxSetup/favorites/favoritesSaga';

export default function* rootSaga() {
    yield all([
        ...Object.values(dashboardSaga).map(fork),
        // ...Object.values(favortiesSaga).map(fork),
    ]);
}
