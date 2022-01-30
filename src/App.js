import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<>
			<NavBar />
			<Banner />
			<About />
		</>
	);
};

export default App;
