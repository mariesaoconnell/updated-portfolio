import React from 'react';
import pride from '../assets/background-images/celebrate_with_pride.png'
import { Container } from 'react-bootstrap';

function Header(props) {
  return (
		<Container
			className='d-flex justify-content-center header-container'
			style={{ backgroundColor: 'rgb(116,95,229)', boxShadow: '0px 0px 10px 20px rgb(116, 95, 229)' }}
			fluid>
			<img src={pride} alt='Celebrate with Pride' className='img-fluid'/>
		</Container>
	);
}

export default Header;
