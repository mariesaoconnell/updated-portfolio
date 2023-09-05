import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../beyond-code.css';

function BeyondCode(props) {
  return (
		<Container
			id='beyond-code'
			className='blur pt-5 text-center'
			style={{ height: '100vh' }}>

      <Container>
        <h2 className='py-5 text-center' id='section-heading'>
          Mariesa <em>Beyond the Code</em> 👩🏻‍💻
        </h2>
      </Container>

      <Container id='best-season' className='text-center my-5'>
        <h2 id='best-season-text'>Favorite Season: Fall 👻 🎃</h2>
      </Container>

      <Container id='home' className='text-center my-5'>
        <h2 id='home-text'>Georgia is Home 🍑</h2>
      </Container>

      <h2>More to come 🫣</h2>
		</Container>
	);
}

export default BeyondCode;
