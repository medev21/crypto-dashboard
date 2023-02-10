// dependencies
import crypto from 'crypto';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
} from '@mui/material';
// import Image from 'next/image'

// types
import { DataTableI } from 'src/common/components/DataTable/DataTable.types';

// utils
import { getUUID } from 'src/utils/genericUtils';

export const DataTable = ({ columns, entries }: DataTableI) => {
    return (
        <>
            <TableContainer sx={{ minWidth: 750 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell className="uppercase">
                                    {column.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow>
                                <TableCell className="border-none">
                                    <img src={entry.image} />
                                    <span>{entry.name}</span>
                                </TableCell>
                                <TableCell className="border-none">
                                    {entry.amount}
                                </TableCell>
                                <TableCell className="border-none">
                                    {entry.price}
                                </TableCell>
                                <TableCell className="border-none">
                                    {entry.value}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
