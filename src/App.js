import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { UserContext } from './context';
import { NavBar } from './navbar';
import { Home } from './home';
import { CreateAccount } from './createaccount';
import { Balance } from './balance';
import { Deposit } from './deposit';
import { Withdraw } from './withdraw';
import { Login } from './login';
import { AllData } from './alldata';

function App() {
	return (
		<HashRouter>
			<NavBar />
			<UserContext.Provider
				value={{
					users: [
						{
							name: 'abel',
							email: 'abel@mit.edu',
							password: 'secret',
							balance: 100,
						},
					],
				}}
			>
				<Route path="/" exact component={Home} />
				<Route path="/CreateAccount/" component={CreateAccount} />
				<Route path="/balance/" component={Balance} />
				<Route path="/deposit/" component={Deposit} />
				<Route path="/login/" component={Login} />
				<Route path="/withdraw/" component={Withdraw} />
				<Route path="/alldata/" component={AllData} />
			</UserContext.Provider>
		</HashRouter>
	);
}

export default App;
