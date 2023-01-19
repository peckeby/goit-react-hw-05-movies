import styled from 'styled-components';
import { PageLoadButton } from 'pages/HomePage/HomePage.styled';

export const FormSearch = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

export const SubmitBtn = styled(PageLoadButton)`
  display: block;
  margin: 0;
  width: 100px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid orange;
  text-align: center;
`;
