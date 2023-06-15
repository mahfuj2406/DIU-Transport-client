
import { useLoaderData } from 'react-router-dom';
import ScheduleRow from './ScheduleRow';

const Schedule = () => {
    const buses = useLoaderData();
    return (
        <div className='container mx-auto search-page py-20'>
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
                            <td>Ticket Price</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            buses.map((bus, index) =><ScheduleRow 
                                key={bus._id}
                                index={index + 1}
                                bus={bus}
                                ></ScheduleRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Schedule;