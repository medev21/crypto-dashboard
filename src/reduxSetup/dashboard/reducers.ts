import {
    DashboardTypes,
    GetActions,
    GetState,
} from 'reduxSetup/dashboard/actionTypes';

const initialState: GetState = {
    coins: [],
    error: null,
    pending: false,
};

const dashboardReducer = (state = initialState, action: GetActions) => {
    switch (action.type) {
        case DashboardTypes.GET_COINS_BY_MARKET:
            return {
                ...state,
                pending: true,
            };
        case DashboardTypes.GET_COINS_BY_MARKET_SUCCESS:
            return {
                ...state,
                coins: action.payload.coins,
                error: null,
                pending: false,
            };
        case DashboardTypes.GET_COINS_BY_MARKET_ERROR:
            return {
                coins: [],
                error: action.payload.error,
                pending: false,
            };
        default:
            return state;
    }
};

export default dashboardReducer;
