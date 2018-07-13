import React from 'react';
import PcHeader from './pc_header.js';
import PcFooter from './pc_footer.js';

import { Switch, Route } from 'react-router-dom';

export default class Pcindex extends React.Component{
	render(){
		return (
			<div>
			<PcHeader />
			<main>
			
			<Switch>
			<Route exact path='/' component={PcHeader}/>
			</Switch>

			</main>
			<PcFooter />
			</div>
			);
		}
	}

