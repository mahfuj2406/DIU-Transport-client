import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";


const AllDrivers = () => {
    const handleUpdate= driver =>{
        
    }
    const handleDelete= driver =>{

    }

    const { data: drivers = [], refetch} = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/drivers')
        return res.json();
    })
    return (
        <div className="w-full">
            <SectionTitle subHeading={"DIU Transport"} heading={"All Drivers"}></SectionTitle>
            <h1 className="ms-2 mb-2">Total drivers  <span className="border px-2 bg-orange-700 rounded-md text-white">{drivers.length}</span></h1>

            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols border rounded-lg">
                    <thead>
                        <tr className='text-md md:text-xl text-center'>
                            <td>#</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Image url</td>
                            <td>Experience</td>
                            <td>Phone</td>
                            <td>Update</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            drivers.map((driver, index) =>
                                <tr className="my-3 text-center text-2xl md:text-3xl"
                                    key={driver._id}
                                >
                                    <th className="text-md md:text-lg"> {index+1} </th>
                                    <td className="text-md md:text-lg">{driver.driverName}</td>
                                    <td className="text-md md:text-lg">{driver.email}</td>
                                    <td className="text-md md:text-lg">{driver.imgURL}</td>
                                    <td className="text-md md:text-lg">{driver.experience}</td>
                                    <td className="text-md md:text-lg">{driver.phone}</td>
                                    <td className="text-md md:text-lg text-start"> {
                                        <button onClick={() => handleUpdate(driver)} className="btn btn-ghost bg-orange-600 text-white"> <GrDocumentUpdate></GrDocumentUpdate> </button>
                                    } </td>
                                    <td className="text-md md:text-lg"> <button onClick={() => handleDelete(driver)} className="btn btn-ghost bg-red-600 text-white"> <FaTrashAlt></FaTrashAlt></button> </td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDrivers;