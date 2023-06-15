import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResultTableRow from './ResultTableRow';

const SearchResult = () => {
    let index = 0;
    const [buses, setBuses] = useState([]);
    const params = useParams();

    const url = `http://localhost:5000/busInfo/${params.routeName}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBuses(data))
    }, [url]);

    return (
        <div className='container mx-auto search-page py-20'>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols border rounded-lg">
                    <thead>
                        <tr className='text-xl md:text-xl text-center'>
                            <td>SL</td>
                            <td>Bus</td>
                            <td>Time</td>
                            <td>From</td>
                            <td>To</td>
                            <td>Route</td>
                            <td>Seat Available</td>
                            <td>Ticket Price</td>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            buses.map(bus =><ResultTableRow 
                                key={bus._id}
                                index={++index}
                                bus={bus}
                                ></ResultTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SearchResult;