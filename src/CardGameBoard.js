import React, { Component } from "react";
import { createDeckAndDraw, drawCardFromDeck } from "./api";
import { CardLayout } from "./Layout.components";
import ButtonsTab from "./ButtonsTab";

export default class CardGameBoard extends Component {
	state = {
		cardImageUrl: null,
		cardValue: null,
		deckId: null,
	};

	async componentDidMount() {
		const { deckId, value, image } = await createDeckAndDraw();
		this.setState({
			deckId,
			cardValue: value,
			cardImageUrl: image,
		});
	}

	onButtonClick = async ({target: {name: bet}}) => {
		const {deckId, value: previousValue} = this.state;
		const {value, image} = await drawCardFromDeck(deckId);
		console.log(bet);
	}

	render() {
		return (
			<CardLayout>
				<img src={this.state.cardImageUrl} alt="This is your card"></img>
				<ButtonsTab onButtonClick={this.onButtonClick}/>
			</CardLayout>
		)
	}
}
