import Slider from "../../components/pages/Home/Slider";
import CardSlider from "../../components/pages/Home/CardSlider";
import AboutTokyo from "../../components/pages/Home/AboutTokyo";
import './Home.css'

const Home = () => {
    return (
        <>
            <Slider />
            <CardSlider />
            <AboutTokyo /> 
        </>
        );
}

export default Home;