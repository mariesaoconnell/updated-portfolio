import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import photo from '../assets/photos/drawing.png';

function About(props) {
	return (
		<Container
			id='about'
			className='d-flex pt-5'
			style={{ minHeight: '100vh' }}>
			<Row xs={1} md={1} lg={2}  className='my-auto d-inline-flex flex-row flex-wrap justify-content-center'>
				<Col className='my-5'>
					<Image src={photo} alt='Picture of Me' rounded style={{maxWidth:'100%'}} />
				</Col>

				<Col className='my-auto'>
					<Container>
						<p>
							<span id='name-heading'> Hi, I'm Mariesa, </span>
							<br />a fullstack developer by day, survival crafting
							extraordinaire by night and German Shepherd mom around the clock!
						</p>
						<p>
							Programming first piqued my interest in 2009, while perusing
							myspace layouts, unable to find the ✨ perfect ✨ layout, I
							decided to dive into the code and tailor my own!
						</p>
						<p>
							After my personal exploration of CSS, I began taking programming
							classes in High School, but it wasn't until 2021 I ultimately
							decided to leave my almost decade long career in auto insurance
							and transition into a career in development! And in 2022 I
							graduated from General Assembly's Software Engineering Immersive
							Remote Program!
						</p>
						<p>
							My favorite parts of coding are being able to create something
							from nothing and my natural drive and determination to solve
							problems! I've always identified as a creative person, but lacked
							the skills typically used to express creativity, which is why{' '}
							<b>love</b> frontend development!
						</p>
						<p>
							When I'm not programming, I can be caught online on Discord
							playing ARK Survival or MW2's DMZ! Something about loot driven
							games sucks me in!
						</p>
					</Container>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
