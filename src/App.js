import React, { Component } from "react";
import { createDeckAndDraw } from "./api";
import "./App.css";
import { Header, Layout } from "./Layout.components";
import CardGameBoard from "./CardGameBoard";

const App = () => (
	<div className="App">
		<Header>
			Bet up or down on the next card's value</Header>
		<Layout>

			<CardGameBoard></CardGameBoard>
		</Layout>
	</div>
);

export default App;
