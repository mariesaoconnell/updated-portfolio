import React from 'react';
import { Container, Row } from 'react-bootstrap';

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

				<div className='p-5 d-inline-flex justify-content-between flex-wrap text-center'>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-javascript-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>JavaScript</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-typescript-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>TypeScript</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-python-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>Python</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-react-original colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>React JS & Native</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-bootstrap-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>BootStrap</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-html5-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>HTML 5</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-css3-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>CSS 3</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-nodejs-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>NodeJS</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-express-original colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'> Express</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-mongodb-plain-wordmark colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>MongoDB</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-django-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'> Django</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i
								class='devicon-postgresql-plain colored'
								style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>PostreSQL</Row>
					</div>
					<div className='mx-5'>
						<Row>
							<i class='devicon-mysql-plain' style={{ fontSize: 60 }}></i>
						</Row>
						<Row className='my-4'>MySQL</Row>
					</div>

				</div>

			</Container>
		</Container>
	);
}

export default Skills;
