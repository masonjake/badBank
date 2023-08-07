import React from 'react';
import { Card } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from './context';

export function Withdraw() {
	const ctx = useContext(UserContext);
	return (
		<Card
			txtcolor="black"
			header="BadBank"
			title="Welfome to the bank"
			text="You can use this bank"
			body={<img src="bank.png" className="img-fluid"></img>}
		/>
	);
}
