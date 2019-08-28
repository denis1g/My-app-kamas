import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
	
	return (
		<div>
			<div className={s.message}>
				<span className={s.span}>{props.id}</span>
				{props.messages}
				
			</div>
		</div>)
	
}

export default Message;

