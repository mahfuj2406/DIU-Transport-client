import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const TodaysScheduleUpdate = () => {
    const id = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Location: ", location);
    const bus = useLoaderData();
    console.log("got bus : ", bus);

    const handleUpdate = (event) => {

        event.preventDefault();
        const form = event.target;
        const busName = form.busName.value;
        const departureTime = form.departureTime.value;
        const departure = form.departure.value;
        const destination = form.destination.value;
        const driverName = form.driverName.value;
        const routeName = form.routeName.value;
        const availableSeat = form.seatCount.value;
        const updatedDoc = {
            busName, 
            departureTime,
            departure,
            destination,
            driverName,
            routeName,
            availableSeat
        }

        fetch(`http://localhost:5000/update-busInfo/${id.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire('Updated Successfully!')

                    navigate('/dashboard/manage-schedule');
                }
            })
    }
    return (
        <div className="container mx-auto bg-white my-10 p-5 ">
            <div className="w-full">
                <div className="text-center w-full md:w-1/2 mx-auto">
                    <h1 className="text-3xl font-bold p-3 border border-teal-900 rounded">Update Todays Schedule </h1>
                </div>
                <form onSubmit={handleUpdate} className="w-full max-w-lg card shadow-2xl p-5 bg-white mx-auto my-5">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="bus-name">Bus Name</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" defaultValue={bus[0].busName} name="busName" id="bus-name" type="text" placeholder="Enter seller name" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="time">
                                Departure Time
                            </label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="departureTime" id="time" type="text" defaultValue={bus[0].departureTime} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="departure">From</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" defaultValue={bus[0].departure} name="departure" id="departure" type="text"/>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="destination">
                                To
                            </label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="destination" id="destination" type="text" defaultValue={bus[0].destination} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="driverName">Driver Name</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="driverName" id="driverName" type="text" defaultValue={bus[0].driverName} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="seatCount">Available Seat</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" defaultValue={bus[0].availableSeat} name="seatCount" id="seatCount" type="number"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="routeName">Route Name</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="routeName" id="routeName" type="text" defaultValue={bus[0].routeName} />
                            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                        </div>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn bg-blue-800 text-white border-0 hover:border hover:bg-blue-900">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodaysScheduleUpdate;