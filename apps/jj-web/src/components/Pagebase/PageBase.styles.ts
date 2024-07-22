import styled from 'styled-components';

export const Page = styled.div`
  background-color: ${(props) => props.theme.customColors.oldLace.main};
  padding: 10px;
  height: 100vh;
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
