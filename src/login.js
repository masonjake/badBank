import React, { useState, useContext } from 'react';
import { UserContext } from './context';
import { Card } from 'react-bootstrap';

export function Login() {
	const ctx = useContext(UserContext);

	const [user, setUser] = useState(false);
	const [valid, setValid] = useState(false);
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');

	function checkLogin() {
		console.log(ctx.users);
		ctx.users.forEach((account) => {
			if (account.email === userEmail && account.password === userPassword) {
				setValid(true);
				setUser(account);
				console.log('welcome!');
				return;
			}
		});
	}
	//make conditional rendering for login with login failed

	//add features for username showing when they login

	const styles = {
		pt: '10px',
		width: '500px',
		color: 'green',
	};

	return (
		<Card
			txtcolor="black"
			header="BadBank"
			title="Login"
			style={styles}
			body={
				valid ? (
					<>
						<p className="success">Welcome back: {user.name}!</p>
						<p>
							{' '}
							Please click <a href="#/balance/"> to check your details</a>
						</p>
					</>
				) : (
					<>
						<p>Please Login below</p>
						<input
							type="text"
							placeholder="enter email"
							value={userEmail}
							onChange={(e) => setUserEmail(e.currentTarget.value)}
						></input>
						<br />
						<input
							type="password"
							placeholder="enter password"
							value={userPassword}
							onChange={(e) => setUserPassword(e.currentTarget.value)}
						></input>
						<br />
						<button type="submit" onClick={checkLogin}>
							Login
						</button>

						<p>
							If you do not have an account:
							<a href="#/CreateAccount/">Click here to create Account</a>
						</p>
					</>
				)
			}
		/>
	);
}
