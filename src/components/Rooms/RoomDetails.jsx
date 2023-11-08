import { Link, useLoaderData } from "react-router-dom";


const RoomDetails = () => {

    const details = useLoaderData();
    console.log(details)

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
            <div>
                <h3 className="text-xl md:text-4xl text-center" >In the Heart of Seattle <br />
                    Near the Space Needle</h3>
                <p>Welcome to Pan Pacific Seattle, a Forbes recommended, AAA Four-Diamond and Conde Nast Top Hotel offering unparalleled hospitality and an authentic Pacific Northwest experience. Let us enliven your stay with attentive service and thoughtful touches like oversized soaking tubs, premium linens and technology-enhanced workspaces. We welcome your canine companions with added amenities and special treats with our Paw Pacific Pets program. Inviting and intuitive, no other hotel captures the essence of the Emerald City like we do.
                </p>
                <p>

                    Take in the sweeping Space Needle and South Lake Union views and let our serene retreat be your base for all your pursuits. Relax with an evening glass of local Washington wine paired with fresh, seasonal cuisine at our sophisticated restaurant, South Lake Kitchen + Bar. Elevate your indulgence with Space Needle views from the outdoor patio, then retreat into the contemporary comforts of our well-appointed accommodations.
                </p>
                <p>
                Explore the Emerald City’s top attractions: catch a show at the stunning Climate Pledge Arena, experience the farm-to-table freshness of the buzzing dining scene, and enjoy convenient access to all the global companies that surround Pan Pacific Seattle.
                </p>
            </div>
        </div>
    );
};

export default RoomDetails;