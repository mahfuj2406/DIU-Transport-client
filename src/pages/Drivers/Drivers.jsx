import { useEffect, useState } from "react";

const Drivers = () => {
    const [drivers, setDrivers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/drivers')
        .then(res=>res.json())
        .then(data => setDrivers(data))
    },[])

    return (
        <div className="container my-10 p-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                drivers.map(driver => <div key={driver._id} className="card max-h-fit card-side bg-base-300 shadow-xl border ">
                    <figure><img className="rounded-lg w-[180px] md:w-[250px] " src={`${driver.imgURL}`} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{driver.driverName}</h2>
                        <span>Phone: {driver.phone}</span>
                        <span>email: {driver.email}</span>
                        <span>{driver.experience} of driving experience</span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Drivers;