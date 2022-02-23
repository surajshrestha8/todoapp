import { Box, Button } from '@mui/material';
import { DataGrid, DataGridProps, GridColumns, GridRowsProp } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

interface Props extends DataGridProps {
  onAddNew?: () => unknown;
}

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
      {props.onAddNew && (
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button variant="contained" onClick={props.onAddNew}>
            Add New
          </Button>
        </Box>
      )}
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
