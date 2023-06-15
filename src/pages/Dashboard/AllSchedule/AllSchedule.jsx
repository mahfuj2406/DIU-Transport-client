
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { TfiExport } from "react-icons/tfi";
import { GrDocumentUpdate } from 'react-icons/gr';
import { FaTrashAlt } from 'react-icons/fa';
import { BsPlusSquareFill } from 'react-icons/bs';

const AllSchedule = () => {
    const { data: buses = [], refetch } = useQuery([''], async () => {
        const res = await fetch('http://localhost:5000/allBusInfo')
        return res.json();
    })
    const handleExport= id =>{

    }
    const handleDelete = id =>{

    }
    return (
        <div className='container mx-auto search-page py-20'>
            
            <SectionTitle subHeading={"DIU Transport"} heading={"All Schedules"}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols border rounded-lg">
                    <thead>
                        <tr className='text-md md:text-xl text-center'>
                            <td>SL</td>
                            <td>Bus</td>
                            <td>Time</td>
                            <td>From</td>
                            <td>To</td>
                            <td>Route</td>
                            <td>Seat Available</td>
                            <td>Export</td>
                            <td>Update</td>
                            <td>Delete</td>
                            {/* <td>Ticket Price</td> */}
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            buses.map((bus, index) =><tr className="my-3 text-center text-2xl md:text-3xl"
                            key={bus._id}>
                            <th className="text-md md:text-lg"> {index + 1} </th>
                            <td className="text-md md:text-lg">{bus.busName}</td>
                            <td className="text-md md:text-lg">{bus.departureTime}</td>
                            <td className="text-md md:text-lg">{bus.departure}</td>
                            <td className="text-md md:text-lg">{bus.destination}</td>
                            <td className="text-md md:text-lg">{bus.routeName}</td>
                            <td className="text-md md:text-lg">{bus.availableSeat}</td>
                            <td className="text-md md:text-lg"><button onClick={() => handleExport(bus._id)} className="btn btn-ghost bg-red-600 text-white"> <TfiExport></TfiExport></button></td>
                            <td className="text-md md:text-lg"><Link to={`update-all-schedule/${bus._id}`}><button className="btn btn-ghost bg-orange-600 text-white"> <GrDocumentUpdate></GrDocumentUpdate> </button></Link></td>
                            <td className="text-md md:text-lg"><button onClick={() => handleDelete(bus._id)} className="btn btn-ghost bg-red-600 text-white"> <FaTrashAlt></FaTrashAlt></button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
                <div className='w-full flex justify-end'>
                <button className='btn btn-ghost bg-blue-600 me-10 mt-10 text-white hover:bg-blue-700'>Insert New Schedule <BsPlusSquareFill></BsPlusSquareFill> </button>
                </div>
            </div>
        </div>
    );
};

export default AllSchedule;