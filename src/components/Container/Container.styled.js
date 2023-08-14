import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing * 12}px;
  justify-content: center;
  padding-left: ${({ theme }) => theme.paddingContainer}px;
`;
