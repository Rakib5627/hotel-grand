import img1 from "../../assets/288591246.jpg"
import img2 from "../../assets/334249292.jpg"
import img3 from "../../assets/301255205.jpg"
import img4 from "../../assets/302861125.jpg"
import img5 from "../../assets/302861137.jpg"
import img6 from "../../assets/328510581.jpg"
import img7 from "../../assets/301255095.jpg"
// import img from "../../assets/WhatsApp Image 2023-11-05 at 3.45.21 PM.jpeg"



const Banner = () => {
    return (
        <div>
            <div className="bg-gray-100 p-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">

                        <div className="bg-white rounded-lg shadow-lg p-4 lg:col-span-2 lg:row-span-2">
                            <img src={img2} alt="Picture 2" className="w-full h-full object-cover" />
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4 lg:col-span-2">
                            <img src={img6} alt="Picture 1" className="w-full h-36 object-cover" />
                        </div>


                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img src={img3} alt="Picture 3" className="w-full h-36 object-cover" />
                        </div>


                        <div className="bg-white rounded-lg shadow-lg p-4 lg:row-span-2">
                            <img src={img4} alt="Picture 4" className="w-full h-full object-cover" />
                        </div>


                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img src={img5} alt="Picture 5" className="w-full h-36 object-cover" />
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img src={img1} alt="Picture 6" className="w-full h-36 object-cover" />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img src={img7} alt="Picture 6" className="w-full h-36 object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                  <div className="">
                  <img src={img} alt="" className="w-96"/>
                  </div>
                  <div>
                    <p></p>
                  </div>
            </div> */}

            
           
            
        </div>
    );
};

export default Banner;