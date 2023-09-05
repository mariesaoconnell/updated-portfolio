import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from '@formspree/react';

function ContactForm(props) {
  const [state, handleSubmit] = useForm('maygjpbo');
  if(state.succeeded) {
    return (
			<Container
				className='text-center blur d-flex flex-column '
				style={{ minHeight: '50vh' }}>
        <Container className='my-5 py-5'>
          <h1>Your Contact form was submitted! ✅ </h1>
          <p>Thanks for your message, I'll get back to you as soon as possible!</p>
        </Container>
			</Container>
		);
  }

  return (
		<Container
			id='contact-form'
			className='blur d-flex flex-column py-5'
			style={{ minHeight: '60vh' }}>
			<h2 className='py-5' id='section-heading'>
				Let's Chat
			</h2>

			<Container>
				<Form
					id='contact-form'
					onSubmit={handleSubmit}
					style={{ width: '100%' }}>
					<Row className='my-2 justify-content-md-center'>
						<Form.Group as={Col} md='4'>
							<Form.Label>First Name</Form.Label>
							<Form.Control
								required
								type='text'
								placeholder='First Name'
								name='First Name'
								id='firstName'
							/>
						</Form.Group>
						<Form.Group as={Col} md='4'>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								required
								type='text'
								placeholder='Last Name'
								name='Last Name'
								id='lastName'
							/>
						</Form.Group>
					</Row>
					<Row className='my-2 justify-content-md-center'>
						<Form.Group as={Col} md='4'>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								required
								type='email'
								name='Email Address'
								placeholder='Email Address'
								id='emailAddress'
							/>
						</Form.Group>
						<Form.Group as={Col} md='4'>
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								required
								type='text'
								name='Phone Number'
								placeholder='Phone Number'
								id='phoneNumber'
							/>
						</Form.Group>
					</Row>
          <Row className='my-2 justify-content-md-center'>
						<Form.Group as={Col} md='8'>
							<Form.Label>Message</Form.Label>
							<Form.Control
								required
								as='textarea'
								rows={3}
								type='text'
								name='message'
								placeholder='Enter your message here...'
								id='message'
							/>
						</Form.Group>
					</Row>
					<Row>
						<Col sm='10' md='10' lg='10' className='d-flex justify-content-end'>
							<Button
								className='about-button'
								type='submit'
                size='lg'
								disabled={state.submitting}>
								Submit
							</Button>
						</Col>
					</Row>
				</Form>
			</Container>
		</Container>
	);
}

export default ContactForm;
