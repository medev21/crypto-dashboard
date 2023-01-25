// components
import DataTable from 'src/common/components/DataTable';

// mocks
import { coinListRes, coinListColumns } from 'src/common/mocks/coinList';

export const HomeView = () => {
    return (
        <>
            <DataTable columns={coinListColumns} entries={coinListRes} />
        </>
    );
};
