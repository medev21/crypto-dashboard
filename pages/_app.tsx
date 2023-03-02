// dependencies
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';

// styles
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default App;
