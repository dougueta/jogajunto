import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PageBase from 'src/components/Pagebase';
import { SideBar, Container, Main, Content } from './Home.style';
import PlayerForm from 'components/PlayerForm';
import Logo from 'assets/logo';

const Home = () => {
  const navigatesss = useNavigate();
  // const handleClick = () => navigate(routes.players)
  const formInitialValues = {
    firstName: '',
    nickName: '',
    isGoalkeeper: false,
  };

  const onSubmit = (values: typeof formInitialValues) => {
    console.log('FormValues-> ', values);
  };

  return (
    <Container>
      <SideBar>
        <Logo />
      </SideBar>
      <Main>
        <PlayerForm />
      </Main>
      <Content>part 3</Content>
    </Container>
  );
};

export default Home;
