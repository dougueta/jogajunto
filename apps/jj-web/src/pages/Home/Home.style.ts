import styled from 'styled-components';

export const PageBase = styled.div`
  max-width: 100%;
  padding: 10px;
  min-height: 100%;
`;
export const Header = styled.div`
  max-width: 100%;
  padding: 10px;
  min-height: 100%;
`;

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;

  grid-template-columns: 1fr;
  grid-template-rows: 4fr 6fr 4fr;
  grid-template-areas:
    'sidebar'
    'main'
    'contents';
  grid-gap: 3px;
`;
export const SideBar = styled.div`
  grid-area: sidebar;
  margin: 0 auto;
`;
export const Main = styled.div`
  grid-area: main;
`;
export const Content = styled.div`
  grid-area: contents;
`;
