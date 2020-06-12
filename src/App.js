import React, { Component } from "react";
import { createDeckAndDraw } from "./api";
import "./App.css";
import { Header, Layout } from "./Layout.components";
import CardGameBoard from "./CardGameBoard";

const App = () => (
	<div className="App">
		<Header>This is a cool card game</Header>
		<Layout>
			<CardGameBoard></CardGameBoard>
		</Layout>
	</div>
);

export default App;
