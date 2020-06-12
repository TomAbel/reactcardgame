import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top 32px;
`;

const Button = styled.button`
	color: white;
	background-color: ${(props) => (props.type === "down" ? "red" : "green")};
	padding: 16px 8px;
	border: 2px solid black;
	border-radius: 4px;
	min-width: 55px;
`;

const ButtonsTab = ({ onButtonClick }) => (
	<ButtonWrapper>
		<Button name="down" onClick={onButtonClick} type="down">
			Down
		</Button>
		<Button name="up" onClick={onButtonClick} type="up">
			Up
		</Button>
	</ButtonWrapper>
);

export default ButtonsTab;
