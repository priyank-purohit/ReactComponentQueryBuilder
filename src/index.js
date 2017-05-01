import React from 'react';
import ReactDOM from 'react-dom';
import MiddlePane from './components/MiddlePane';
import './styles/index.css';

export default class Layout extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<MiddlePane />
			</div>
		);
	}
}

const app = document.getElementById('root');
ReactDOM.render(<Layout/>, app);