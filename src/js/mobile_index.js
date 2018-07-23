import React from 'react';
import MobileHeader from './mobile_header.js';
import MobileFooter from './mobile_footer.js';
import MobileMain from './mobile_main.js';
import MobileNews from './mobile_news.js';
import MobileNewsDetails from './mobile_news_detail.js';

import { Switch, Route } from 'react-router-dom';

export default class Mobileindex extends React.Component{
	render(){
		return (
			<div>
			<MobileHeader />
			<main>
			
			<Switch>
			<Route exact path='/' component={MobileMain}/>
			<Route exact path='/news' component={MobileNews}/>
			<Route path='/details/:uniquekey' component={MobileNewsDetails}/>
			</Switch>

			</main>
			<MobileFooter />
			</div>
			);
		}
	}

