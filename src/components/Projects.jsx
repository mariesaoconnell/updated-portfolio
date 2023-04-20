import React, {useState} from 'react';
import { Container, Card, Button, Tabs, Tab } from 'react-bootstrap';
import StreamLine from '../assets/photos/StreamLine.png'
import DocuSet from '../assets/photos/DocuSet.png'
import ArmagHeadOn from '../assets/photos/ArmagHeadOn.png'
import VinFinder from '../assets/photos/VinFinder.png'

function Projects(props) {
	const [key, setKey] = useState('Vin Finder')

  return (
		<Container id='projects' className='pt-5'>
			<h2 className='py-5' id='section-heading'>
				Projects
			</h2>


			<Tabs
				className='bg-light rounded'
				activeKey={key}
				onSelect={(k) => setKey(k)}>
				<Tab eventKey='Vin Finder' title='Vin Finder'>
					<Card>
						<Card.Img variant='top' src={VinFinder} />
						<Card.Body>
							<Card.Title style={{ fontSize: '30px' }}>VIN Finder</Card.Title>
							<Card.Text>
								a full-stack application that allows users to search VIN Numbers
								and returns information on the vehicle as well as photos of the
								vehicle searched. VIN Finder utilizes features like
								authentication and authorization, light and dark mode, multiple
								API calls for results, as well as an AI bot which allows users
								to seek answers to FAQs.
							</Card.Text>
							<Card.Text>
								<b>Technologies Used:</b>
								<em>JavaScript, React JS, CSS, Bootstrap, Firebase Auth</em>
							</Card.Text>
						</Card.Body>
						<Card.Footer className='d-flex justify-content-end'>
							<Button
								size='lg'
								href='https://vinfinder.netlify.app/'
								target='_blank'
								className='mx-5 px-5 my-2'>
								Site
							</Button>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/ncs-tech-assessment'
								target='_blank'
								className='mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab eventKey='DocuSet' title='DocuSet'>
					<Card>
						<Card.Img variant='top' src={DocuSet} />
						<Card.Body>
							<Card.Title style={{ fontSize: '30px' }}>DocuSet</Card.Title>
							<Card.Text>
								DocuSet is a note taking app, powered by the MERN stack. This
								app was a team effort, developed in an agile environment, my
								primary task was building the backend of this application, which
								used MongoDB and Express, to route the app's search and filter
								functionality!
							</Card.Text>
							<Card.Text>
								<b>Technologies Used:</b>{' '}
								<em>JavaScript, React JS, CSS, Express, MongoDB, Node JS</em>
							</Card.Text>
						</Card.Body>
						<Card.Footer className='d-flex justify-content-end'>
							<Button
								size='lg'
								href='https://cheatsheetmern.netlify.app/'
								target='_blank'
								className='mx-5 px-5 my-2'>
								Site
							</Button>
							<Button
								size='lg'
								href='https://github.com/SEIR822-SquardFeelTheMERN/feelthemern-frontend'
								target='_blank'
								className='mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab eventKey='Streamline' title='Streamline Stream Search'>
					<Card>
						<Card.Img variant='top' src={StreamLine} />
						<Card.Body>
							<Card.Title style={{ fontSize: '30px' }}>
								Streamline Stream Search
							</Card.Title>
							<Card.Text>
								Streamline, powered by React, is a platform is used to search
								movies and shows for the streaming services they're available.
							</Card.Text>
							<Card.Text>
								<b>Technologies Used:</b> <em>JavaScript, React JS, CSS</em>
							</Card.Text>
						</Card.Body>
						<Card.Footer className='d-flex justify-content-end'>
							<Button
								size='lg'
								href='https://streamlinestreamsearch.netlify.app/'
								target='_blank'
								className='mx-5 px-5 my-2'>
								Site
							</Button>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/Streamline-Stream-Search'
								target='_blank'
								className='mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab eventKey='ArmagHeadOn' title='ArmaHeadOn'>
					<Card>
						<Card.Img variant='top' src={ArmagHeadOn} />
						<Card.Body>
							<Card.Title style={{ fontSize: '30px' }}>ArmagHEADon</Card.Title>
							<Card.Text>
								ArmagHEADon is a Jeopardy! style quiz game, themed after Dan
								Harmon's Rick and Morty Season 2 Episode 5, "Get Schwifty.
								ArmagHEADon is powered by HTML, CSS, and JavaScript!"
							</Card.Text>
							<Card.Text>
								<b>Technologies Used:</b> <em>HTML, CSS, JavaScript</em>
							</Card.Text>
						</Card.Body>
						<Card.Footer className='d-flex justify-content-end'>
							<Button
								size='lg'
								href='https://armagheadon.netlify.app/'
								target='_blank'
								className='mx-5 px-5 my-2'>
								Site
							</Button>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/ArmagHEADon-'
								target='_blank'
								className='mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab eventKey='' title=''></Tab>
			</Tabs>
		</Container>
	);
}

export default Projects;