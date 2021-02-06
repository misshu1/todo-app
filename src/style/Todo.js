import styled, { css } from 'styled-components';

export const Todo = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  background-color: #202020;
  color: #d6d8de;
  padding: 0.5rem;
  border-radius: inherit;

  span {
    margin-left: 0.5rem;
    font-size: 1.3rem;
  }

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      span {
        text-decoration: line-through;
        opacity: 0.5;
      }
    `}
`;
