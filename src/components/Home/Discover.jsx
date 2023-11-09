import { Link } from "react-router-dom";
import img from "../../assets/WhatsApp Image 2023-11-05 at 3.45.21 PM.jpeg"


const Discover = () => {
    return (
        <div className="mt-20">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="" height="200px"/></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className=" text-2xl font-bold lg:text-4xl">Discover Our Rooms and Suites</h2>
                    <hr />
                    <div className="md:border-2 hover:border-lime-700 text-center hover:text-lime-700 rounded-full p-5">
                        <Link to="/details/6547bb984ca95ce8447befc4"><p className="text-xl font-medium ">Standard Single Room</p></Link>
                    </div>
                    <div className="md:border-2 hover:border-lime-700 text-center hover:text-lime-700 rounded-full p-5">
                    <Link to="/details/6547bb984ca95ce8447befc6"><p className="text-xl font-medium">Double Delux</p></Link>
                    </div>
                    <div className="md:border-2 hover:border-lime-700 text-center hover:text-lime-700 rounded-full p-5">
                    <Link to="details/6547bb984ca95ce8447befc8"><p className="text-xl font-medium">Family Suit</p></Link>
                    </div>
                    <div className="md:border-2 hover:border-lime-700 text-center hover:text-lime-700 rounded-full p-5">
                        <Link to="/details/6547bb984ca95ce8447befc9"><p className="text-xl font-medium ">Executive Suit</p></Link>
                    </div>
                    
                    
                    <Link to="/rooms" className="text-xl mt-5 ms-5 lg:ms-0 text-center font-medium text-lime-800 hover:text-lime-600">Discover More</Link>
                </div>
            </div>
        </div>
    );
};

export default Discover;