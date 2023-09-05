import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function Navigation(props) {
	return (
		<>
			<Navbar
				fixed='top'
				variant='dark'
				expand='lg'
				collapseOnSelect
				className='main-navigation mb-5'>
				<Container>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse>
						<Container className='d-inline-flex justify-content-between'>
							<Nav>
								<Nav.Link className='nav-text-styling px-4' href='/#'>
									Home
								</Nav.Link>
								<Nav.Link className='nav-text-styling px-4' href='/#about'>
									About
								</Nav.Link>
								<Nav.Link className='nav-text-styling px-4' href='/#skills'>
									Skills
								</Nav.Link>
								<Nav.Link className='nav-text-styling px-4' href='/#projects'>
									Projects
								</Nav.Link>
								<Nav.Link className='nav-text-styling px-4' href='/#contact-form'>
									Contact Me
								</Nav.Link>

							</Nav>
							{/* <Nav>
								<Nav.Link href='/causes'>
									Spread Awareness
								</Nav.Link>
							</Nav> */}
							<Nav>
								<Nav.Link
									className='px-4'
									href='mailto:mariesa.oconnell.dev@gmail.com'>
									<Button className='nav-button' size='lg'>
										Message
									</Button>
								</Nav.Link>
								<Nav.Link
									className='px-4'
									href='https://docs.google.com/document/d/1cqvkyEbBUdUnre65Pj1c3gL-EaBZ-FWK/edit?usp=share_link&ouid=107418996880202139994&rtpof=true&sd=true'
									target='_blank'>
									<Button className='nav-button' size='lg'>
										Resume
									</Button>
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
