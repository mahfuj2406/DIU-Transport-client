
const ResultTableRow = ({ bus, index }) => {
    const {busName, departureTime, departure, destination,routeName,availableSeat} = bus;
    return (
        <tr className="my-3 text-center text-xl md:text-3xl">
            <th> {index} </th>
            <td>{busName}</td>
            <td>{departureTime}</td>
            <td>{departure}</td>
            <td>{destination}</td>
            <td>{routeName}</td>
            <td>{availableSeat}</td>
            <td>25</td>
            <th><button className="btn btn-xs btn-success">Book</button></th>
        </tr>
    );
};

export default ResultTableRow;