import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
let mapDispatchTooProps = (dispatch) => {
	return {
		onSendMessage: () => {
			dispatch(sendMessageCreator());
		},
		updateNewMessageBody: (body) => {
			dispatch( updateNewMessageBodyCreator(body));
		}

	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchTooProps)(Dialogs);

export default DialogsContainer;

