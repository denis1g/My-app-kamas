import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import AddMessageFormRedux from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
	
	let state = props.dialogsPage;
	
	let dialogsEelements = state.dialogs.map((d, index) =>
		<DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>
	);
	
	let messagesElements = state.messages.map((m, index) =>
		<Message messages={m.message} id={m.id} key={m.id}/>
	);
	
	let newMessageBody = state.newMessageBody;

	
	let addNewMessage = (values) => {
		props.onSendMessage(values.newMessageBody);
	};
	
	if (!props.isAuth) return <Redirect to={"/login"}/>;
	
	return (
		<div className={s.dialogs}>
			
			<div className={s.dialogsItems}>
				{dialogsEelements}
			</div>
			
			<div className={s.messages}>
				
				<div>{messagesElements}</div>
				
				<AddMessageFormRedux onSubmit={addNewMessage}/>
			
			</div>
		
		</div>
	)
};


export default Dialogs;

