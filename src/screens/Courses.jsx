import React from 'react';
import { Container, Row, Col, ListGroup, Breadcrumb, Image } from 'react-bootstrap';
import gif from '../assets/photos/mochi-cute.gif'

function Courses(props) {
  return (
		<Container
			className='d-flex flex-column pt-5 mt-5'
			style={{
				backgroundColor: 'rgba(248, 214, 215,.9)',
				boxShadow: ' 0px 0px 15px 5px rgb(237,97,97)',
				minHeight: '85vh',
			}}>
			<Breadcrumb className=''>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Recommended Courses</Breadcrumb.Item>
			</Breadcrumb>

			<h2>My Recommended Courses</h2>
			<Container className='my-5'>
				<Row>
					<Col className='d-flex justify-content-center'>
						<Image src={gif}/>
					</Col>
					<Col>
						<ListGroup>
							<ListGroup.Item className='p-4'>
								<a
									href='https://www.udemy.com/course-dashboard-redirect/?course_id=959700'
									target='_blank'>
									<em>The Complete React Native + Hooks Course</em>
								</a>
							</ListGroup.Item>
							<ListGroup.Item className='p-4'>
								<a
									href='https://www.udemy.com/course-dashboard-redirect/?course_id=2776760'
									target='_blank'>
									<em>
										100 Days of Code: The Complete Python Pro Bootcamp for 2023
									</em>
								</a>
							</ListGroup.Item>
							<ListGroup.Item className='p-4'>
								<a
									href='https://www.udemy.com/course-dashboard-redirect/?course_id=2045310'
									target='_blank'>
									<em>
										Build a Backend Rest API with Python & Django - Advanced
									</em>
								</a>
							</ListGroup.Item>
							<ListGroup.Item className='p-4'>
								<a
									href='https://www.udemy.com/course-dashboard-redirect/?course_id=382002'
									target='_blank'>
									<em>
										C# Basics for Beginners: Learn C# Fundamentals by Coding
									</em>
								</a>
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Courses;
