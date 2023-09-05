import React from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import gif from '../assets/photos/work-work-in-progress.gif'

function WorksInProgress(props) {
  return (
		<Container
			id='in-the-works'
			className='blur d-flex flex-column pt-5'
			style={{ minHeight: '70vh' }}
			fluid>
			<h2 className='pt-5' id='section-heading'>
				In the Works
			</h2>
			<Container className='my-auto' fluid>
				<Row
					xs={1}
					md={2}
					className='m-auto d-flex justify-content-center text-center'
					fluid>
					<Col className='my-5'>
						<Image
							src={gif}
							alt='Work in Progress'
							rounded
							style={{ maxWidth: '100%' }}
						/>
					</Col>
					<Col className='my-auto'>
						🚧 Adding Authentication to Streamline Stream Search
						<br />
						🚧 Building a website for a local business owner
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default WorksInProgress;
