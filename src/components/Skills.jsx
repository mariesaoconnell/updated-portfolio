import React from 'react';
import { Container } from 'react-bootstrap';

function Skills(props) {
	return (
		<Container
			id='skills'
			className='d-flex pt-5'
			style={{ minHeight: '50vh' }}
			fluid>
			<h2 className='pt-5' id='section-heading'>
				Skills
			</h2>

			<Container className='my-auto' fluid>
				<h3>Frontend:</h3>
				<Container className='d-inline-flex flex-row justify-content-evenly my-auto flex-wrap justify-content-center'>
					<i
						class='devicon-javascript-plain colored'
						style={{ fontSize: 60 }}></i>
					<i
						class='devicon-typescript-plain colored'
						style={{ fontSize: 60 }}></i>
					<i class='devicon-python-plain colored' style={{ fontSize: 60 }}></i>
					<i
						class='devicon-react-original colored'
						style={{ fontSize: 60 }}></i>
					<i
						class='devicon-bootstrap-plain colored'
						style={{ fontSize: 60 }}></i>
					<i class='devicon-html5-plain colored' style={{ fontSize: 60 }}></i>
					<i class='devicon-css3-plain colored' style={{ fontSize: 60 }}></i>
				</Container>
				<p className='my-3 text-center'>
					JavaScript, TypeScript, Python, React JS, React Native, Bootstrap,
					HTML, CSS
				</p>

				<h3>Backend:</h3>
				<Container className='d-inline-flex flex-row justify-content-evenly my-auto flex-wrap justify-content-center'>
					<i class='devicon-nodejs-plain colored' style={{ fontSize: 60 }}></i>
					<i
						class='devicon-express-original colored'
						style={{ fontSize: 60 }}></i>
					<i
						class='devicon-mongodb-plain-wordmark colored'
						style={{ fontSize: 60 }}></i>
					<i class='devicon-django-plain colored' style={{ fontSize: 60 }}></i>
					<i
						class='devicon-postgresql-plain colored'
						style={{ fontSize: 60 }}></i>
				</Container>
				<p className='my-3 text-center'>
					NodeJS, Express, MongoDB, Django, PostreSQL, REST APIs
				</p>
			</Container>
		</Container>
	);
}

export default Skills;
