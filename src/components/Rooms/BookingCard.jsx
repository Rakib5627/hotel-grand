

const BookingCard = ({ booking, handleDelete , handleUpdate }) => {

    const { _id, date, title, price, roomImages } = booking;

    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);

    const date1 = new Date(date);
    const date2 = new Date(nextDay);

    console.log(date1 , date2)

    if(date1 > date2) {
        console.log('you can')
    }






    


    return (
        <tr>

            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {roomImages && <img src={roomImages} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{date}</td>
            <td>6 am</td>
            <td>${price}</td>
            <th>
                <button onClick={() => {
                    if(date1 > date2) {
                        console.log('you can')
                        handleDelete(_id)
                    }
                    else{
                        alert('Cannot Delete')
                    }
                     
                    }      
                } 
                    className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <th>

                <button onClick={() => {
                    if(date1 > date2) {
                        console.log('you can')
                        handleUpdate(_id)
                    }
                    else{
                        alert('Cannot Update')
                    }
                     
                    }      
                } 
                 className="btn btn-ghost btn-xs">Update</button>
            </th>
        </tr>
    );
};

export default BookingCard;