import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
export default class RoomJoinPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			roomCode: "",
			error: "",
		};
		this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
		this.roomButtonPressed = this.roomButtonPressed.bind(this);
	}

	render() {
		return <p>This is the join room page</p>;
	}
}
