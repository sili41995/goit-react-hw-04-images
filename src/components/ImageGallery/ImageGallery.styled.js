import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing * 4}px;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
