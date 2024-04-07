import React, { useRef } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

/**
 * @typedef {Object} CommonDataTableProps
 * @property {TableColumn[]} columns - An array of column configurations.
 * @property {any[]} data - The array of data to be displayed in the table.
 * @property {boolean} loading - Indicates if the data is currently being loaded.
 * @property {boolean} [pagination] - Indicates if pagination controls should be displayed.
 * @property {boolean} [paginationServer] - Indicates if pagination is server-side.
 * @property {function} [onChangePage] - A callback function for page change events.
 * @property {function} [onChangeRowsPerPage] - A callback function for rows per page change events.
 * @property {number} paginationPerPage - The number of items to display per page.
 * @property {number} [paginationDefaultPage=1] - The default active page when the table is initially rendered.
 * @property {number} paginationTotalRows - The total number of rows in the dataset.
 * @property {boolean} [sortServer] - Indicates if sorting is server-side.
 * @property {function} [onSort] - A callback function for sort events.
 */
interface CommonDataTableProps {
    columns: TableColumn<any>[];
    data: any[];
    loading: boolean;
    pagination?: boolean;
    paginationServer?: boolean;
    onChangePage?: any;
    onChangeRowsPerPage?: any;
    paginationPerPage: number;
    paginationTotalRows: number;
    sortServer?: boolean;
    onSort?: any;
    paginationDefaultPage?: number;
}

const CommonDataTable: React.FC<CommonDataTableProps> = ({
    columns,
    data,
    loading,
    pagination,
    paginationServer,
    onChangePage,
    onChangeRowsPerPage,
    paginationPerPage,
    paginationTotalRows,
    sortServer,
    onSort,
    paginationDefaultPage
}) => {

    return (
        <DataTable
            columns={columns}
            data={data}
            progressPending={loading}
            sortServer={sortServer}
            pagination={pagination}
            paginationServer={paginationServer}
            paginationTotalRows={paginationTotalRows}
            paginationPerPage={paginationPerPage}
            onSort={onSort}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
            paginationDefaultPage={paginationDefaultPage}
        />
    );
};

export default CommonDataTable;
