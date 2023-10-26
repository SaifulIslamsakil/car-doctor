import img from "../../assets/images/about_us/person.jpg"
import img2 from "../../assets/images/about_us/parts.jpg"
const AboutUs = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row space-x-10 p-10">
                <div className=" w-1/2 relative">
                <img src ={img} className="max-w-sm rounded-lg shadow-2xl " />
                <img src ={img2} className="max-w-sm rounded-lg shadow-2xl absolute top-1/2 left-44 w-72 border-8 border-white" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-orange-500 font-semibold">About us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field!</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;