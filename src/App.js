import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import NavBar from "./components/NavBar";
import PopularFarmacy from "./components/PopularFarmacy";
import Services from "./components/Services";
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
			<PopularFarmacy />
			<Services />
		</>
	);
};

export default App;
