import styled from "styled-components";

export const FormSelect = styled.select`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormOption = styled.option`
  color: ${({ active }) => (active ? "green" : "black")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;

export const InputResponse = styled.p`
  color: ${({ success }) => (success ? "green" : "red")};
  font-size: smaller;
  margin: -25px 0px 40px 0px;
`;

export const ButtonResponse = styled.p`
  color: green;
`;