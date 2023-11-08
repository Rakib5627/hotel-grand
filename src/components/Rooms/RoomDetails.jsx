import { Link, useLoaderData } from "react-router-dom";


const RoomDetails = () => {

    const details = useLoaderData();
    console.log(details)

   let avl = 'Not Available' ;

   if(details.availability === true) {
     avl = 'Available' ;
   }

   


    return (
        <div>
            <Link to={`/book/${details._id}`}>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${details.roomImages})` }}>
                    <div className="hero-overlay bg-opacity-20"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <p className="mb-5">Experience the sights of Seattle</p>
                            <button className=" border rounded p-3 border-emerald-700 hover:border-emerald-200">Book Now</button>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{details.roomDescription}
                    <div className="badge badge-accent">{avl}</div>
                    </h2>
                    <p>Price {details.pricePerNight}$</p>
                    <p>Size: {details.roomSize}</p>
                    <div className="card-actions">
                    <Link to={`/book/${details._id}`}><button className="btn btn-outline btn-accent">Book Now</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;