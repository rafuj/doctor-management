import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import CallToAction from "./components/CallToAction";
import ExpertDoctors from "./components/ExpertDoctors";
import Faqs from "./components/Faqs";
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
			<ExpertDoctors />
			<CallToAction />
			<Faqs />
			<Blogs />
		</>
	);
};

export default App;
