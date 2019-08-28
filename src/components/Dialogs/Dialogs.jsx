import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
	
	let dialogsEelements = props.state.dialogs.map((d, index) =>
		<DialogItem name={d.name} id={d.id} avatar={d.avatar} key={index}/>
	);
	
	let messagesElements = props.state.messages.map((m, index) =>
		<Message messages={m.message} id={m.id} key={index}/>
	)
	
	let newMessagesElement = React.createRef()
	
	let messagesClick = () => {
		let text = newMessagesElement.current.value;
		alert(text);
	}

	
	return (
		<div className={s.dialogs}>
			
			<div className={s.dialogsItems}>
				{dialogsEelements}
			</div>
			
			<div className={s.messages}>
				
				{messagesElements}
				
				<textarea ref={newMessagesElement}></textarea>
				
				<div>
					<button onClick={messagesClick}>Button</button>
				</div>
				
			</div>
			
			
			
		</div>
	)
}

export default Dialogs;

