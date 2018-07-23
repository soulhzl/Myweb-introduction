import React from 'react';
import { Carousel, Tabs } from 'antd';
import MobileResume from './mobile_resume';
import MobileList from './mobile_list.js';
import MobileListPullRefresh from './mobile_list_pull_refresh.js';
const TabPane = Tabs.TabPane;

export default class MobileMain extends React.Component{
	render(){
		const setting = {
			dots: true,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			speed: 500
		};
		
		return (
			<div>

			<Tabs>
			<TabPane tab='个人简历' key='1'>
			<Carousel {...setting}>
			<div><img src='./src/image/gjmail.png'/></div>
			<div><img src='./src/image/gjfile.png'/></div>
			<div><a href="http://www.g-jack.com/"><img src='./src/image/gjweb.png'/></a></div>
			</Carousel>
			<MobileResume />
			</TabPane>
			<TabPane tab='新闻1' key='2'>
			<MobileList count={5} type='shehui'/>
			</TabPane>
			<TabPane tab='新闻2' key='3'>
			<MobileListPullRefresh count={5} type='yule'/>
			</TabPane>
			</Tabs>
			</div>
			);
	}
}