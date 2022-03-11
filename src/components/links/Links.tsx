import { useNavigate } from 'react-router-dom';
import { newRoutes } from '~/routes/new.routes';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItemAvatar, Avatar } from '@mui/material';
import { Grid } from '@mui/material';
import { RouteItem } from '~/interface/common.interface';
import SparkLine from '../sparklines/sparkline';
const Links = ({ onItemClick }: any) => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent, route: RouteItem) => {
    console.log(route.link);
    onItemClick(e);

    if (route.link) {
      window.open(`https://${route.link}`, '_blank');
    } else {
      navigate(route.path);
    }
  };
  const data = [5, 4, 3, 7, 9, 5];
  return (
    <>
      <h1 style={{ marginLeft: '20px' }}>Apps</h1>
      <Grid container spacing={1} columnGap={-1} sx={{ width: '350px' }}>
        {newRoutes.map((route) => (
          <Grid xs={5} item key={route.id}>
            <ListItem>
              <ListItemButton sx={{ mr: 2 }} onClick={(e) => handleClick(e, route)}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src={route.image} />
                </ListItemAvatar>
                <ListItemText sx={{ ml: -2 }} primary={route.title} />
              </ListItemButton>
            </ListItem>
          </Grid>
        ))}
      </Grid>
      <SparkLine data={data} />
    </>
  );
};

export default Links;
