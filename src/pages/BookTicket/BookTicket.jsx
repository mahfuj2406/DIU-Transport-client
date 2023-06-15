import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
let index = 0;


const BookTicket = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/transportInfo')
            .then(res => res.json())
            .then(data => setSelect(data[3].departureTime))
    }, [])
    // console.log("select array ", select);


    const handleSearch = event=>{
        event.preventDefault();
        const form = event.target;
        const departure = form.departure.value;
        const destination = form.destination.value;
        const routeName = departure + "-" + destination;
        navigate(`/busInfo/${routeName}`);
        
    }
    return (
        <div className="w-full">
            <div className="container mx-auto p-20">
                <div className="card max-w-sm shadow-2xl  mx-auto">
                    <form onSubmit={handleSearch}>
                        <div className="card-body border rounded-xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time-slot (optional)</span>
                                </label>
                                <select className="select select-bordered select-sm w-full max-w-xs" defaultValue={'select'}>
                                    <option disabled>select</option>
                                    {
                                        select.map(s => <option key={index++}>{s}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">From</span>
                                </label>
                                <input type="text" name="departure" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">To</span>
                                </label>
                                <input type="text" name="destination" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" >Search for bus</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookTicket;