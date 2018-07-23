import React from 'react';
import { Carousel, Card } from 'antd';
import MobileResume from './mobile_resume';

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
			<Carousel {...setting}>
			<div><img src='./src/image/gjmail.png'/></div>
			<div><img src='./src/image/gjfile.png'/></div>
			<div><a href="http://www.g-jack.com/"><img src='./src/image/gjweb.png'/></a></div>
			</Carousel>
			<MobileResume />
			</div>
			);
	}
}