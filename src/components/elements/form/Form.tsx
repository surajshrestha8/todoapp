import { Box, Button, Grid } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import Spinner from '~/components/elements/loader/Spinner';

interface Props {
  children: React.ReactNode;
  onSubmit: (e: SyntheticEvent) => unknown;
  onCancel?: () => unknown;
  loading?: boolean; // If there is anything loading before rendering forms
  saving?: boolean; // If saving the form data
}

const Form = ({ children, onSubmit, onCancel, loading, saving }: Props) => {
  if (loading) {
    return null; // We can also return loading component here
  }

  return (
    <Grid container justifyContent="center">
      <Grid item sm={12} md={10} lg={8}>
        <Box
          autoComplete="off"
          component="form"
          display="flex"
          flexDirection="column"
          rowGap={3}
          onSubmit={onSubmit}
        >
          {children}
          <Box>
            <Button variant="contained" type="submit" disabled={saving}>
              {saving && <Spinner show={true} size={25} />}
              {!saving && 'Submit'}
            </Button>
            <Box ml={2} display="inline">
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

export default Form;
