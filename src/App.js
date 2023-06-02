import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WorksInProgress from "./components/WorksInProgress";

import { Container } from "react-bootstrap";
function App() {
  return (
		<Container className="d-flex flex-column justify-content-center p-0" fluid>
			<Header />
			
			<Container>
				<About />
				<Skills />
				<Projects />
				<WorksInProgress />
			</Container>
		</Container>
	);
}

export default App;
