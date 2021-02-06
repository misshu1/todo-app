import styled from 'styled-components';

export const TodosContainer = styled.div`
  margin-top: 3rem;
  background-color: #444;
  border-radius: 4px;
  display: grid;
  grid-auto-rows: repeat(auto-fill, 1.5rem);
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  gap: 1px;
`;
