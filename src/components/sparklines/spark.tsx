import SparkLine from './sparkline';
import { useState } from 'react';
import { ButtonGroup, Button, Grid, Divider, Typography } from '@mui/material';
import Select from 'react-select';
const Spark = () => {
  const data = [2, 10, 3, 10, 2, 15, 1];
  const [today, setToday] = useState(0);
  const [orders, setOrders] = useState(0);
  const [collection, setCollection] = useState(0);
  const [selectedButton, setSelectedButton] = useState('');
  const options = [
    {
      value: 'Nepal',
      label: 'Nepal',
    },
    {
      value: 'India',
      label: 'India',
    },
    {
      value: 'Denmark',
      label: 'Denmark',
    },
    {
      value: 'Australia',
      label: 'Australia',
    },
    {
      value: 'France',
      label: 'France',
    },
  ];

  const visitsArray = [
    {
      id: 1,
      orders: 20,
      collection: 50,
      visit: 80,
    },
    {
      id: 7,
      orders: 100,
      collection: 60,
      visit: 500,
    },
    {
      id: 30,
      orders: 1000,
      collection: 700,
      visit: 2000,
    },
  ];
  const changeData = (value: number, e: any) => {
    const selectedData = visitsArray.find((selected) => selected.id === value);
    if (selectedData) {
      setToday(selectedData.visit);
      setOrders(selectedData.orders);
      setCollection(selectedData.collection);
      setSelectedButton(e.target.id);
    }
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          width: '450px',
          border: '1px solid gray',
          marginLeft: '10px',
          fontFamily: 'Roboto',
          color: 'gray',
        }}
      >
        <Grid item xs={2}>
          <h3 style={{ marginTop: '0px' }}>Visits</h3>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <ButtonGroup sx={{ height: '30px' }} size="small" variant="contained">
            <Button
              id="seven"
              color={selectedButton === 'seven' ? 'secondary' : 'primary'}
              onClick={(e) => changeData(1, e)}
            >
              Today
            </Button>
            <Button
              id="eight"
              color={selectedButton === 'eight' ? 'secondary' : 'primary'}
              onClick={(e) => changeData(7, e)}
            >
              Last 7 days
            </Button>
            <Button
              id="thirty"
              color={selectedButton === 'thirty' ? 'secondary' : 'primary'}
              onClick={(e) => changeData(30, e)}
            >
              Last 30 days
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ mb: -1, mt: 3, fontSize: 50, fontWeight: 700 }} color="text.secondary">
            {today}
          </Typography>
          <Typography sx={{ fontWeight: 700 }} color="text.secondary">
            New Visits
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <SparkLine data={data} />
        </Grid>
        <Divider />
        <Grid item xs={3}>
          <Typography sx={{ mb: -1, mt: 3 }} color="text.secondary">
            Total Orders:
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 30 }} color="text.secondary">
            {orders}
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={7}>
          <Typography sx={{ mb: -1, mt: 3 }} color="text.secondary">
            Total Collection:
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 30 }} color="text.secondary">
            {collection}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Spark;
