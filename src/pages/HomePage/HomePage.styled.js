import styled from 'styled-components';
import { Link } from 'components/SharedLayout/SharedLayout.styled';

export const MovieGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  justify-content: center;
  padding-inline-start: 0;
`;

export const MovieItem = styled.li`
  width: 200px;
`;

export const PageLoadButton = styled.button`
  cursor: pointer;
  width: 200px;
  height: 40px;
  outline: none;
  border: none;
  background-color: orange;
  color: aliceblue;
  font-weight: 600;
  border-radius: 13px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: black;
    color: orange;
  }
`;

export const MovieLink = styled(Link)`
  padding: 0;
`;
