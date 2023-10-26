import { useEffect, useState } from "react";


const Service = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    console.log(serviceData)
    return (
        <div className=" space-y-4 ">
                <h3 className="text-orange-500 font-bold text-center">Service</h3>
                <h2 className="text-5xl font-bold text-center">Our Service Area</h2>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        serviceData.map(data => <div key={data._id} className="card  bg-base-100 shadow-xl">
                        <figure className="px-3 pt-4">
                          <img src={data.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{data.title}</h2>
                          <p className="text-orange-500 font-bold">price: ${data.price}</p>
                        </div>
                      </div>)
                    }
                </div>
        </div>
    );
};

export default Service;