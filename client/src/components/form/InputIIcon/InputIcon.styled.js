import styled from "styled-components";

export const InputContainer = styled.div`
  border-radius: 5px;
  border: 1px solid var(--bs-gray-200);
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px;
  input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    outline: none;
  }

  svg {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
`;
