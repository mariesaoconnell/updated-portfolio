import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Skills(props) {
	return (
		<Container
			id='skills'
			className='blur d-flex flex-column p-5'
			style={{ minHeight: '100vh' }}
			fluid>
			<h2 className='pt-5' id='section-heading'>
				Skills
			</h2>

			<Container className='pt-5 my-auto' fluid>
				<h3>Frontend:</h3>

				<Row className='p-5'>
					<Col>
						<Row>
							<i
								class='devicon-javascript-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>JavaScript</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-typescript-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>TypeScript</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-python-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>Python</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-react-original colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>React JS & Native</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-bootstrap-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>BootStrap</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-html5-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>HTML 5</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-css3-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>CSS 3</Row>
					</Col>
				</Row>

				<h3>Backend:</h3>

				<Row className='p-5'>
					<Col>
						<Row>
							<i
								class='devicon-nodejs-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>NodeJS</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-express-original colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'> Express</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-mongodb-plain-wordmark colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>MongoDB</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-django-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'> Django</Row>
					</Col>
					<Col>
						<Row>
							<i
								class='devicon-postgresql-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>PostreSQL</Row>
					</Col>
					<Col>
						<Row></Row>
						<Row className='my-4'></Row>
					</Col>
					<Col>
						<Row></Row>
						<Row className='my-4'></Row>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Skills;
