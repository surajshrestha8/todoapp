import { Box, Button, Grid } from '@mui/material';
import React, { SyntheticEvent } from 'react';

interface Props {
  children: React.ReactNode;
  onSubmit: (e: SyntheticEvent) => unknown;
  onCancel?: () => unknown;
}

const Form = ({ children, onSubmit, onCancel }: Props) => {
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
            <Button variant="contained" type="submit">
              Submit
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
