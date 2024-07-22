import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PageBase from 'src/components/Pagebase';

const Raffle = () => {
  const navigate = useNavigate();
  // const handleClick = () => navigate(routes.players)

  return (
    <PageBase>
      <Typography>Sorteio</Typography>
    </PageBase>
  );
};

export default Raffle;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'gray',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
}));
