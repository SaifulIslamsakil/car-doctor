import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[80vh]" style={{backgroundImage: `url(${img1})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"}}>
                <div style={{backgroundColor:" rgba(21, 21, 21, 0.50)"}} className="w-full h-full">
                <div className="space-y-3 px-10 py-32">
                    <h2 className="w-[460px] text-5xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-primary">Discover More</button>
                    <button className=" ml-4 btn btn-outline btn-error">Latest Project</button>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full h-[80vh]" style={{backgroundImage: `url(${img2})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"}}>
                <div style={{backgroundColor:" rgba(21, 21, 21, 0.50)"}} className="w-full h-full">
                <div className="space-y-3 px-10 py-32">
                    <h2 className="w-[460px] text-5xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-primary">Discover More</button>
                    <button className=" ml-4 btn btn-outline btn-error">Latest Project</button>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[80vh]" style={{backgroundImage: `url(${img3})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"}}>
                <div style={{backgroundColor:" rgba(21, 21, 21, 0.50)"}} className="w-full h-full">
                <div className="space-y-3 px-10 py-32">
                    <h2 className="w-[460px] text-5xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-primary">Discover More</button>
                    <button className=" ml-4 btn btn-outline btn-error">Latest Project</button>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full h-[80vh]" style={{backgroundImage: `url(${img3})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"}}>
                <div style={{backgroundColor:" rgba(21, 21, 21, 0.50)"}} className="w-full h-full">
                <div className="space-y-3 px-10 py-32">
                    <h2 className="w-[460px] text-5xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-primary">Discover More</button>
                    <button className=" ml-4 btn btn-outline btn-error">Latest Project</button>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[80vh]" style={{backgroundImage: `url(${img4})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"}}>
                <div style={{backgroundColor:" rgba(21, 21, 21, 0.50)"}} className="w-full h-full">
                <div className="space-y-3 px-10 py-32">
                    <h2 className="w-[460px] text-5xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-primary">Discover More</button>
                    <button className=" ml-4 btn btn-outline btn-error">Latest Project</button>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[80vh]" style={{backgroundImage: `url(${img6})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"}}>
                <div style={{backgroundColor:" rgba(21, 21, 21, 0.50)"}} className="w-full h-full">
                <div className="space-y-3 px-10 py-32">
                    <h2 className="w-[460px] text-5xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-primary">Discover More</button>
                    <button className=" ml-4 btn btn-outline btn-error">Latest Project</button>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-red-500 text-white">❯</a>
                </div>
                </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full h-[80vh]" style={{backgroundImage: `url(${img1})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"}}>
                <div style={{backgroundColor:" rgba(21, 21, 21, 0.50)"}} className="w-full h-full">
                <div className="space-y-3 px-10 py-32">
                    <h2 className="w-[460px] text-5xl text-white font-bold">Affordable Price For Car Servicing</h2>
                    <p className="text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-primary">Discover More</button>
                    <button className=" ml-4 btn btn-outline btn-error">Latest Project</button>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;