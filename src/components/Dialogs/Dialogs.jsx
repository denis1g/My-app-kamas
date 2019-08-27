import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
	
	let dialogsEelements = props.dialogs.map((d, index) =>
		<DialogItem name={d.name} id={d.id} key={index}/>
	);
	
	let messagesElements = props.messages.map((m, index) =>
		<Message messages={m.message} key={index}/>
	)

	
	return (
		<div className={s.dialogs}>
			
			<div className={s.dialogsItems}>
				{dialogsEelements}
			</div>
			
			<div className={s.messages}>
				{messagesElements}
			</div>
			
		</div>
	)
}

export default Dialogs;

