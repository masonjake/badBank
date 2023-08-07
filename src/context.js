import React from 'react';
import { createContext } from 'react';

export const UserContext = createContext(null);

function Card(props) {
	function classes() {
		const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
		const txt = props.txtcolor ? ' bg-' + props.txtcolor : ' ';
		return 'card mb-3 ' + bg + txt;
	}

	return (
		<div className={classes()} style={{ maxWidth: '18rem' }}>
			<div className="card-header">{props.header}</div>
			<div className="card-body">
				{props.title && <h5 className="card-title">{props.title}</h5>}
				{props.text && <p className="card-title">{props.text}</p>}
				{props.body}
				{props.status && <div id="createStatus">{props.status}</div>}
			</div>
		</div>
	);
}
