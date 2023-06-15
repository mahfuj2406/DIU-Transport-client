import { useQuery } from '@tanstack/react-query';
import {  FaHammer, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const TodaysSchedule = () => {
    const { data: buses = [], refetch } = useQuery([''], async () => {
        const res = await fetch('http://localhost:5000/busInfo');
        return res.json();
    })

    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/busInfo/delete-todays-schedule/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                
            }
        })
        
    }
    return (
        <div className='container mx-auto search-page py-20'>
            
            <SectionTitle subHeading={"DIU Transport"} heading={"Todays Schedules"}></SectionTitle>
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
                            <td className="text-md md:text-lg"><Link to={`/dashboard/update-todays-schedule/${bus._id}`}><button className="btn btn-ghost bg-orange-600 text-white"> <FaHammer></FaHammer> </button></Link></td>
                            <td className="text-md md:text-lg"><button onClick={() => handleDelete(bus._id)} className="btn btn-ghost bg-red-600 text-white"> <FaTimes></FaTimes>  </button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
                <div className='w-full flex justify-end'>
                <Link to={'/dashboard/all-schedule'}><button className='btn btn-ghost bg-blue-600 me-5 mt-10 text-white hover:bg-blue-700'>Add New</button></Link>
                <button className='btn btn-ghost bg-red-600 me-10 mt-10 text-white hover:bg-red-700'>Clear Schedule <FaTrashAlt></FaTrashAlt></button>
                </div>
            </div>
        </div>
    );
};

export default TodaysSchedule;