import React, {useState} from 'react';
import { Container, Card, Button, Tabs, Tab } from 'react-bootstrap';
import StreamLine from '../assets/photos/StreamLine.png'
import DocuSet from '../assets/photos/DocuSet.png'
import ArmagHeadOn from '../assets/photos/ArmagHeadOn.png'
import VinFinder from '../assets/photos/VinFinder.png'
import DaddyBop from '../assets/photos/MusicBot.gif'
import ChatGPT from '../assets/photos/ChaptGPT.gif';
import StreamLineUpdated from '../assets/photos/StreamlineUpdated.gif'
import Cinder from '../assets/photos/Cinder.gif';

function Projects(props) {
	const [key, setKey] = useState('cinder')

  return (
		<Container id='projects' className='blur pt-5'>
			<h2 className='py-5' id='section-heading'>
				Projects
			</h2>

			<Tabs
				className='tabs bg-light rounded'
				activeKey={key}
				onSelect={(k) => setKey(k)}>
				<Tab eventKey='cinder' title="Baldur's Gate 3 Romance Guide">
					<Card>
						<Card.Img variant='top' src={Cinder} alt='Cinder application gif' />
						<Card.Body className='card-background'>
							<Card.Title style={{ fontSize: '30px' }}>Cinder 🔥</Card.Title>
							<Card.Text>
								<p>
									Cinder is a Full-Stack application, developed to assist users in
									efficiency romancing their BG3 Crush.
								</p>

								<p>
									My inspiration for Cinder came from my love of BG3 and my devotion to romance every character to see how their ending played out. Doing that on your own without some kind of guide would take a ton of time, considering 300 hours in I had finally managed to finish my first play through. The few guides I found felt a bit lack luster, so I started developing an app that felt easier on the eyes and made navigation and tracking my progress easier.
								</p>

								<p>
									Cinder was developed to allow users to search dialogue scenes by
									act, companion or simply view all dialogue scene in the database
									for their Bosom Companion's reaction. Cinder also allows users
									to create new dialogue scenarios and is <i>anticipated</i> to
									support user Logins, where Users will be able to add, update and
									delete their own posts, while also being able to rate and
									comment on other users posts.
								</p>
								
							</Card.Text>
							<Card.Text>
								<b>Technologies Used: </b>
								<em>ReactJS, Bootstrap, NodeJS, Express, MySQL</em>
							</Card.Text>
						</Card.Body>
						<Card.Footer className='card-footer d-flex justify-content-end'>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/bg3-companion-app'
								target='_blank'
								className='card-button mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab
					eventKey='daddybop'
					title='Discord Music Bot'
					alt='Daddy Bop Application Gif'>
					<Card>
						<Card.Img variant='top' src={DaddyBop} />
						<Card.Body className='card-background'>
							<Card.Title style={{ fontSize: '30px' }}>Daddy Bop</Card.Title>
							<Card.Text>
								A Backend application that allows discord users to stream songs
								to the voice channel they're connected to! Daddy Bop utilizes
								the Discord.js and DisTube packages to listen for slash
								interactions and their respective commands, which have been
								programmed to carry out functions such as{' '}
								<i>play, pause, resume, skip, stop, and queue</i>.
							</Card.Text>
							<Card.Text>
								<b>Technologies Used: </b>
								<em>JavaScript, DiscordJS, DisTune</em>
							</Card.Text>
						</Card.Body>
						<Card.Footer className='card-footer d-flex justify-content-end'>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/daddy-bop'
								target='_blank'
								className='card-button mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab
					eventKey='dixon'
					title='Discord ChatGPT Bot'
					alt='Discord ChatGPT Bot application gif'>
					<Card>
						<Card.Img variant='top' src={ChatGPT} />
						<Card.Body className='card-background'>
							<Card.Title style={{ fontSize: '30px' }}>Daddy Bop</Card.Title>
							<Card.Text>
								A backend application that allows discord users to interact with
								Open AI's API, which acts as an in program mini Chat GPT! Dixon
								utilized Discord.js to listen for incoming messages from user,
								Open AI runs the content of the message into their API to
								generate a response, which is then sent out to the User in
								discord using discord.js' reply method!
							</Card.Text>
							<Card.Text>
								<b>Technologies Used: </b>
								<em>JavaScript, DiscordJS, OpenAI</em>
							</Card.Text>
						</Card.Body>
						<Card.Footer className='d-flex justify-content-end'>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/chat-gpt-discord-bot'
								target='_blank'
								className='card-button mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab eventKey='Vin Finder' title='Vin Finder'>
					<Card>
						<Card.Img
							variant='top'
							src={VinFinder}
							alt='VinFinder Application Gif'
						/>
						<Card.Body className='card-background'>
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
								className='card-button mx-5 px-5 my-2'>
								Site
							</Button>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/ncs-tech-assessment'
								target='_blank'
								className='card-button mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab eventKey='DocuSet' title='DocuSet'>
					<Card>
						<Card.Img
							variant='top'
							src={DocuSet}
							alt='DocuSet Application Gif'
						/>
						<Card.Body className='card-background'>
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
								className='card-button mx-5 px-5 my-2'>
								Site
							</Button>
							<Button
								size='lg'
								href='https://github.com/SEIR822-SquardFeelTheMERN/feelthemern-frontend'
								target='_blank'
								className='card-button mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab eventKey='Streamline' title='Streamline Stream Search'>
					<Card>
						<Card.Img
							variant='top'
							src={StreamLine}
							alt='Streamline OG Application Gif'
						/>
						<Card.Body className='card-background'>
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
								className='card-button mx-5 px-5 my-2'>
								Site
							</Button>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/Streamline-Stream-Search'
								target='_blank'
								className='card-button mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab
					eventKey='StreamlineUpdated'
					title='Streamline Stream Search  ✨ Updated ✨'>
					<Card>
						<Card.Img
							variant='top'
							src={StreamLineUpdated}
							alt='Streamline Updated Application Gif'
						/>
						<Card.Body className='card-background'>
							<Card.Title style={{ fontSize: '30px' }}>
								Streamline Stream Search
							</Card.Title>
							<Card.Text>
								Streamline, powered by React, is a platform is used to search
								movies and shows for the streaming services they're available.
							</Card.Text>
							<Card.Text>
								<b>Technologies Used:</b>{' '}
								<em>JavaScript, React JS, BootStrap5</em>
							</Card.Text>
						</Card.Body>
						<Card.Footer className='d-flex justify-content-end'>
							<Button
								size='lg'
								href='https://streamline-stream-search.netlify.com/'
								target='_blank'
								className='card-button mx-5 px-5 my-2'>
								Site
							</Button>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/streamline-refactored'
								target='_blank'
								className='card-button mx-5 px-5 my-2'>
								Repo
							</Button>
						</Card.Footer>
					</Card>
				</Tab>
				<Tab eventKey='ArmagHeadOn' title='ArmaHeadOn'>
					<Card>
						<Card.Img variant='top' src={ArmagHeadOn} />
						<Card.Body className='card-background'>
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
								className='card-button mx-5 px-5 my-2'>
								Site
							</Button>
							<Button
								size='lg'
								href='https://github.com/mariesaoconnell/ArmagHEADon-'
								target='_blank'
								className='card-button mx-5 px-5 my-2'>
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
