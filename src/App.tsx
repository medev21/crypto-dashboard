// dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

// actionCreators
import { getCoinsByMarket } from './redux/dashboard/actionCreators';

// hooks
import useFirstMount from './common/hooks/useFirstMount';

const App: React.VFC = () => {
    const dispatch = useDispatch();

    useFirstMount(() => {
        dispatch(getCoinsByMarket());
    });

    return <div className="App">app goes here</div>;
};

export default App;
