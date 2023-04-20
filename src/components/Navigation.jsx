import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function Navigation(props) {
	return (
		<>
			<Navbar
				// style={{ backgroundColor: 'rgba(248, 214, 215)' }}
				style={{ backgroundColor: 'rgb(237,97,97)' }}
				fixed='top'
				variant='light'
				expand='lg'
				collapseOnSelect
				className='mb-5'>
				<Container>
					<Navbar.Brand>
						<Nav.Link href='/'>Mariesa O'Connell</Nav.Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse>
						<Container className='d-inline-flex justify-content-between'>
							<Nav>
								<Nav.Link href='/#about'>About</Nav.Link>
								<Nav.Link href='/#skills'>Skills</Nav.Link>
								<Nav.Link href='/#projects'>Projects</Nav.Link>
								<Nav.Link href='/#in-the-works'>In the Works</Nav.Link>
								<Nav.Link href='/recommended-courses'>
									Recommended Courses
								</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href='mailto:mariesa.oconnell.dev@gmail.com'>
									<Button variant='outline-dark'>Message</Button>
								</Nav.Link>
								<Nav.Link
									href='https://docs.google.com/document/d/1cqvkyEbBUdUnre65Pj1c3gL-EaBZ-FWK/edit?usp=share_link&ouid=107418996880202139994&rtpof=true&sd=true'
									target='_blank'>
									<Button variant='outline-dark'>Resume</Button>
								</Nav.Link>
							</Nav>
						</Container>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
