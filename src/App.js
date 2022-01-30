import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import NavBar from "./components/NavBar";
import Steps from "./components/Steps";
import VideoConsultation from "./components/VideoConsultation";

const App = () => {
	return (
		<>
			<NavBar />
			<Banner />
			<About />
			<VideoConsultation />
			<Feature />
			<Steps />
		</>
	);
};

export default App;
