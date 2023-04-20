import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WorksInProgress from "./components/WorksInProgress";

import { Container } from "react-bootstrap";
function App() {
  return (
		<Container
			style={{
				backgroundColor: 'rgba(248, 214, 215,.9)',
				boxShadow: ' 0px 0px 15px 5px rgb(237,97,97)',
			}}>
			<About />
			<Skills />
			<Projects />
			<WorksInProgress />
		</Container>
	);
}

export default App;
