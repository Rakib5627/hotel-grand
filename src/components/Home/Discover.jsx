import { Link } from "react-router-dom";
import img from "../../assets/WhatsApp Image 2023-11-05 at 3.45.21 PM.jpeg"


const Discover = () => {
    return (
        <div className="mt-20">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="" height="200px"/></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title text-4xl">Discover Our <br /> Rooms and <br /> Suites</h2>
                    <div className="border-2 hover:border-lime-700 text-center hover:text-lime-700 rounded-full p-5">
                        <Link to="/details/6547bb984ca95ce8447befc4"><p className="text-xl font-medium ">Standard Single Room</p></Link>
                    </div>
                    <div className="border-2 hover:border-lime-700 text-center hover:text-lime-700 rounded-full p-5">
                    <Link to="/details/6547bb984ca95ce8447befc6"><p className="text-xl font-medium">Double Delux</p></Link>
                    </div>
                    <div className="border-2 hover:border-lime-700 text-center hover:text-lime-700 rounded-full p-5">
                    <Link to="details/6547bb984ca95ce8447befc8"><p className="text-xl font-medium">Family Suit</p></Link>
                    </div>
                    <div className="border-2 hover:border-lime-700 text-center hover:text-lime-700 rounded-full p-5">
                        <Link to="/details/6547bb984ca95ce8447befc9"><p className="text-xl font-medium ">Executive Suit</p></Link>
                    </div>
                    
                    
                    <Link to="/rooms" className="text-xl mt-5 text-center font-medium text-lime-800 hover:text-lime-600">Discover More</Link>
                </div>
            </div>
        </div>
    );
};

export default Discover;