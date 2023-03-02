// dependencies
import { useUser } from '@auth0/nextjs-auth0/client';

// views
import HomeView from 'src/views/Home';

const MainPage = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return <HomeView />;
    }

    return <a href="/api/auth/login">Please login</a>;
};

export default MainPage;
