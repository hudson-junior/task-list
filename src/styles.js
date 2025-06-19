import styled from "styled-components";

import { GoTrash, GoCheckbox } from "react-icons/go";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.div`
  background: ${(props) => (props.IsCompleted ? "#e8ff8b" : "#e4e4e4")};
  height: 60px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 20px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);

  li {
    list-style: none;
  }
`;

export const TaskList = styled.div`
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  padding: 10px;

  input {
    height: 40px;
    width: 340px;
    border: 2px solid #d1d3d466;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    height: 40px;
    border-radius: 5px;
    background-color: #8052ec;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.7;
    }
  }

  ul {
    padding: 0;
    margin-top: 20px;
  }

  h3 {
    display: flex;
    justify-content: center;
    opacity: 0.5;
  }
`;

export const Trash = styled(GoTrash)`
  cursor: pointer;
`;

export const Check = styled(GoCheckbox)`
  cursor: pointer;
`;
