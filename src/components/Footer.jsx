import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Icon } from '@mui/material';


function Footer(props) {
	return (
		<>
			<Navbar style={{ backgroundColor: 'rgb(237,97,97)' }}>
				<Container className='d-flex my-4 flex-column'>
					<Container className='px-5 d-flex justify-content-center'>
						<Nav.Link
							className='mx-5'
							href='https://github.com/mariesaoconnell'
							target='_blank'>
							<i
								id='button'
								class='devicon-github-original-wordmark colored'
								style={{ fontSize: 40 }}></i>
						</Nav.Link>
						<Nav.Link
							className='mx-5'
							href='https://www.linkedin.com/in/mariesaoconnell/'
							target='_blank'>
							<i id='button' class='devicon-linkedin-plain' style={{ fontSize: 40 }}></i>
						</Nav.Link>
						<Nav.Link
							className='mx-5'
							href='mailto:mariesa.oconnell.dev@gmail.com'>
							<Icon id='button' style={{ fontSize: 40 }}>mail</Icon>
						</Nav.Link>
					</Container>

					<Container className='px-5 mt-3 d-flex justify-content-center'>
						<p>Copyright © 2022 | Design by Mariesa O'Connell</p>
					</Container>
				</Container>
			</Navbar>
		</>
	);
}

export default Footer;
