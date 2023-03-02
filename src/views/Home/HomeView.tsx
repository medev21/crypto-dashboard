// components
import DataTable from 'src/common/components/DataTable';

// mocks
import { coinListRes, coinListColumns } from 'src/common/mocks/coinList';

export const HomeView = () => {
    return (
        <>
            <a href="/api/auth/logout">Logout</a>
            <DataTable columns={coinListColumns} entries={coinListRes} />
        </>
    );
};
