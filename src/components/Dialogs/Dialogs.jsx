import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
	
	
	let state = props.dialogsPage;
	
	let dialogsEelements = state.dialogs.map((d, index) =>
		<DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>
	);
	
	let messagesElements = state.messages.map((m, index) =>
		<Message messages={m.message} id={m.id} key={m.id}/>
	);
	
	let newMessageBody = state.newMessageBody;
	
	let onSendMessageClick = () => {
		props.onSendMessage();
	};
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};
	
	return (
		<div className={s.dialogs}>
			
			<div className={s.dialogsItems}>
				{dialogsEelements}
			</div>
			
			<div className={s.messages}>
				
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							value={newMessageBody}
							placeholder='Enter your message'
							onChange={onNewMessageChange}>
						</textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
				
			</div>
			
		</div>
	)
}

export default Dialogs;

