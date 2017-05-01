import React, { Component } from 'react';
import '../styles/MiddlePane.css';
import '../styles/QueryBuilder.css';
import QueryBuilderWrapper from '../components/QueryBuilder.js';

import ReactDOM from 'react-dom';

class MiddlePane extends Component {
	render() {
		return (
			<div className="MiddlePane" id="middlePane">
				<div className="MiddlePaneInner">
					<h2>jQuery QueryBuilder as a Component</h2>
					<hr color="grey"/>
					<QueryBuilderWrapper />
				</div>
			</div>
		);
	}
}

export default MiddlePane;

