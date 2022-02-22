import { Box } from '@mui/material';
import { DataGrid, DataGridProps, GridColumns, GridRowsProp } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

type Props = DataGridProps;

const Grid = (props: Props) => {
  const { columns: propColumns, page, rows: data, pageSize } = props;
  const [columns, setColumns] = useState<GridColumns>([]);
  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    setColumns([
      { flex: 1, field: 'sn', headerName: 'S.N.' },
      ...propColumns.map((column) => ({ flex: 1, ...column })),
    ]);
  }, [propColumns]);

  useEffect(() => {
    setRows(
      data.map((item, index) => {
        const startsAt = (page || 0) * (pageSize || 1);
        return {
          sn: startsAt + index + 1,
          ...item,
        };
      })
    );
  }, [data, page, pageSize]);

  return (
    <Box>
      <DataGrid
        autoHeight
        columns={columns}
        rows={rows}
        loading={props.loading}
        paginationMode="server"
        pagination
        page={props.page}
        pageSize={props.pageSize}
        rowCount={props.rowCount}
      />
    </Box>
  );
};

export default Grid;
