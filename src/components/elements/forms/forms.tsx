import React, { Children, SyntheticEvent } from 'react';
import Spinner from '../loader/Spinner';
import { Grid, Box, Button } from '@mui/material';

interface Props {
  children: React.ReactNode;
  loading: boolean;
  saving: boolean;
  onCancel?: () => unknown;
  onSubmit: (e: SyntheticEvent) => unknown;
}

const Forms = ({ children, loading, saving, onCancel, onSubmit }: Props) => {
  if (loading) {
    return null;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item sm={12} md={10} lg={8}>
        <Box
          autoComplete="off"
          component="form"
          display="flex"
          flexDirection="column"
          onSubmit={onSubmit}
          rowGap={2}
        >
          {children}
          <Box>
            <Button variant="contained" type="submit" disabled={saving}>
              {saving && <Spinner size={25} show={true} />}
              {!saving && 'Submit'}
            </Button>
            <Box ml={3} display="inline">
              <Button variant="outlined" type="button" onClick={onCancel}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Forms;
