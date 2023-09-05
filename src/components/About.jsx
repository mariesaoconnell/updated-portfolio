import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import photo from '../assets/photos/drawing.png';

function About(props) {
	return (
		<Container
			id='about'
			className='blur d-flex flex-column p-0'
			style={{ minHeight: '100vh' }}>
			<Row
				xs={1}
				md={1}
				lg={2}
				className='my-auto d-inline-flex flex-row flex-wrap justify-content-center'>
				<Col className='my-5'>
					<img src={photo} alt='Drawing of me' className='img-fluid' />
				</Col>

				<Col className='my-auto'>
					<Container className='text-center'>
						<p>
							<span id='name-heading'> Hi, I'm Mariesa! </span>
							<br />
							<h3 className='my-3'>
								I'm a Fullstack Developer, I specialize in developing in ReactJS
								and love branching into other tech stacks!
							</h3>
							<h4>
								Check out my <a href='/#skills'>Skills</a> and{' '}
								<a href='/#projects'>Projects</a>!
							</h4>
						</p>
					</Container>
					<Container className='d-inline-flex justify-content-evenly px-4 my-5'>
						<Button className='about-button' size='lg' href='/beyond-the-code'>
							Mariesa Beyond The Code
						</Button>
						<Button className='about-button' size='lg' href='/#contact-form'>
							Let's Work Together!
						</Button>
					</Container>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
