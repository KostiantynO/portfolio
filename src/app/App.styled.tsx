import styled from 'styled-components/macro';

export const AppStyled = styled.div`
  min-height: 100vh;

  color: #eee;

  background-color: #212121;

  & main {
    display: flex;

    gap: 32px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.preTablet}) {
      flex-wrap: wrap;
    }
  }
`;
