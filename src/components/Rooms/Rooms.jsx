import { Link, useLoaderData } from "react-router-dom";


const Rooms = () => {

    const rooms = useLoaderData();
    console.log(rooms);

    return (
        <div className="grid grid-cols-3 gap-10">
            {
                rooms.map(room => <div key={room._id}>
                    <Link to={`/details/${room._id}`}>
                        <div className="card w-96 h-72 image-full">
                            <figure><img src={room.roomImages} alt="" className="h-full"/></figure>
                            <div className="card-body mt-40">
                                <h2 className="card-title">{room.roomDescription}</h2>
                                <p>Price per night:{room.pricePerNight}$</p>
                            </div>
                        </div>
                    </Link>



                </div>)
            }
        </div>
    );
};

export default Rooms;