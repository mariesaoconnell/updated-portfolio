import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';

function Causes(props) {
  return (
		<Container
			className='d-flex flex-column pt-5 mt-5'
			style={{
				minHeight: '90vh',
			}}>
			<Breadcrumb className=''>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Causes I Support</Breadcrumb.Item>
			</Breadcrumb>

			<h2>Causes I Support</h2>
		</Container>
	);
}

export default Causes;
