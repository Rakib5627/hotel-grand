import img from "../../assets/WhatsApp Image 2023-11-05 at 3.45.21 PM.jpeg"

const Map = () => {
    return (
        <div className="mt-20 flex gap-10">
            <div className="w-1/2">
                <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13330.476603985371!2d89.230962485637!3d25.746536748644882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de4cc6a6985%3A0x7bd5104fa37f038b!2sGrand%20Palace%20Hotel!5e0!3m2!1sen!2sbd!4v1699438346516!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
            </div>
         
            <div className="w-1/2">
                <h3 className="text-xl md:text-4xl text-center" >In the Heart of Seattle <br />
                    Near the Space Needle</h3>
                <p className=" my-6">Welcome to Pan Pacific Seattle, a Forbes recommended, AAA Four-Diamond and Conde Nast Top Hotel offering unparalleled hospitality and an authentic Pacific Northwest experience. Let us enliven your stay with attentive service and thoughtful touches like oversized soaking tubs, premium linens and technology-enhanced workspaces. We welcome your canine companions with added amenities and special treats with our Paw Pacific Pets program. Inviting and intuitive, no other hotel captures the essence of the Emerald City like we do.
                </p>
                <p>

                    Take in the sweeping Space Needle and South Lake Union views and let our serene retreat be your base for all your pursuits. Relax with an evening glass of local Washington wine paired with fresh, seasonal cuisine at our sophisticated restaurant, South Lake Kitchen + Bar. Elevate your indulgence with Space Needle views from the outdoor patio, then retreat into the contemporary comforts of our well-appointed accommodations.
                </p>
                <p>
                Explore the Emerald City’s top attractions: catch a show at the stunning Climate Pledge Arena, experience the farm-to-table freshness of the buzzing dining scene, and enjoy convenient access to all the global companies that surround Pan Pacific Seattle.
                </p>
            </div>
            {/* <div>
                 <img src={img} alt="" height="600px" className=""/>
            </div> */}
        </div>
    );
};

export default Map;