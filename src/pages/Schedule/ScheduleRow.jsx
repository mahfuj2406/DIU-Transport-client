

const ScheduleRow = ({ bus, index }) => {
    const { busName, departureTime, departure, destination, routeName, availableSeat } = bus;
    return (
        <>
            <tr className="my-3 text-center text-2xl md:text-3xl">
                <th className="text-md md:text-lg"> {index} </th>
                <td className="text-md md:text-lg">{busName}</td>
                <td className="text-md md:text-lg">{departureTime}</td>
                <td className="text-md md:text-lg">{departure}</td>
                <td className="text-md md:text-lg">{destination}</td>
                <td className="text-md md:text-lg">{routeName}</td>
                <td className="text-md md:text-lg">{availableSeat}</td>
                <td className="text-md md:text-lg">25</td>
            </tr>
        </>
    );
};

export default ScheduleRow;