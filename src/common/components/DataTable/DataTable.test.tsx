// components
import DataTable from 'src/common/components/DataTable';

// dependencies
// import {describe, it} from 'vitest'
import { screen, render } from '@testing-library/react';

// mocks
import { coinListRes, coinListColumns } from 'src/common/mocks/coinList';

describe('DataTable test', () => {
    it('render the app', () => {
        // arrange
        render(<DataTable columns={coinListColumns} entries={coinListRes} />);
        // act
        const assetText = screen.getByText('asset');
        // assert
        expect(assetText).toBeInTheDocument();
    });
});
