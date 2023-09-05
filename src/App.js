import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

import { Container } from "react-bootstrap";
function App() {
  return (
		<Container className="d-flex flex-column justify-content-center p-0" fluid>
			{/* <Header /> */}

			<Container>
				<About />
				<Skills />
				<Projects />
				<ContactForm />
			</Container>
		</Container>
	);
}

export default App;
