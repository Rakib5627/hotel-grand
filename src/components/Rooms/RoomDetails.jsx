import { Link, useLoaderData } from "react-router-dom";
import ReviewHere from "./DetailsMore/ReviewHere";
import ShowReview from "./DetailsMore/ShowReview";



const RoomDetails = () => {

    const details = useLoaderData();
   

   let avl = 'Available' ;

   if(details.availability === true) {
     avl = 'Not Available' ;
   }

   const price = details.pricePerNight;
   const newPrice = price + price * 0.2 ;

   const title = details.roomDescription;
   const serve =details._id;


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
            <div className="md:grid md:grid-cols-3">
                <div className="card-body">
                    <h2 className="card-title">{title}
                    <div className="badge badge-accent badge-lg text-xs">{avl}</div>
                    </h2>
                    <p>Size: {details.roomSize}</p>
                    <p>City Skyline</p>
                    <p>With scenic views including downtown Seattle, This Room provides a luxurious setting to unwind in.</p>
                </div>

                <div className="card-body">
                <p className="text-xl font-medium">Advanced Purchase Rate</p>
                 <p className=" font-medium">Get rewarded by planning ahead</p>
                 <ul className=" text-xs font-extralight">
                    <li>Non-refundable Reservation</li>
                    <li>Premium Wi-Fi</li>
                    <li>Onsite fitness center with sauna and whirlpool</li>
                    <li>Full deposit will be taken on day of booking.</li>
                    <li>No cancellation or modifications are available with this rate plan.</li>
                    <li>Full deposit will be forfeited with cancellation or no show.</li>
                 </ul>
                    
                </div>
                <div className="card-body">
                             
                    <p>Offer Price : {details.pricePerNight}$</p>
                    <div className="">
                    <Link to={`/book/${details._id}`}><button className="btn btn-accent">Book Now</button> </Link>
                    </div>

                    <p>Price {newPrice}$</p>
                    <div className="">
                    <Link ><button className=" bg-accent px-4 py-3 rounded-lg">Book Now</button> </Link>
                    </div>
                </div>
            </div>

            <div>

                <ShowReview serve={serve} ></ShowReview>
               
                <ReviewHere details={details} ></ReviewHere>

            </div>
        </div>
    );
};

export default RoomDetails;