
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    // user delete function 
    const handleDelete= user =>{

    }

    // admin making function 
    const makeAdmin = user =>{
        console.log(user._id);
        fetch( `http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='container mx-auto search-page py-20'>
            <SectionTitle subHeading={"DIU Transport"} heading={"All Users"}></SectionTitle>
            <h1>Total users : {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols border rounded-lg">
                    <thead>
                        <tr className='text-md md:text-xl text-center'>
                            <td>#</td>
                            <td>Name</td>
                            <td>ID</td>
                            <td>Email</td>
                            <td>Role</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            users.map((user, index) =>
                                <tr className="my-3 text-center text-2xl md:text-3xl"
                                    key={user._id}
                                >
                                    <th className="text-md md:text-lg"> {index + 1} </th>
                                    <td className="text-md md:text-lg">{user.name}</td>
                                    <td className="text-md md:text-lg">{user.varsityId}</td>
                                    <td className="text-md md:text-lg">{user.email}</td>
                                    <td className="text-md md:text-lg text-start"> {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => makeAdmin(user)} className="btn btn-ghost bg-green-600 text-white"> <FaUserShield></FaUserShield></button>
                                    } </td>
                                    <td className="text-md md:text-lg"> <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white"> <FaTrashAlt></FaTrashAlt></button> </td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;