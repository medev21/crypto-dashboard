// dependencies
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// actionCreators
import { getCoinsByMarket } from './redux/dashboard/actionCreators';

// hooks
import useFirstMount from './common/hooks/useFirstMount';

// assets
import logo from './logo.svg';
import './App.css';

const App: React.VFC = () => {
    const dispatch = useDispatch();

    useFirstMount(() => {
        dispatch(getCoinsByMarket());
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
