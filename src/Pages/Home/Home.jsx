import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Service from "./Service";


const Home = () => {
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
        </div>
    );
};

export default Home;