import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/offer1.jpg"
import img2 from "../../assets/offer2.jpg"
import img3 from "../../assets/offer3.jpg"
import img4 from "../../assets/offer4.png"


const Offer = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    return (
        <div className='w-3/4 m-auto'>
            <div className="mt-20">
                <Slider {...settings}>

                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={img2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">20% off</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>


                    {/* <div>
                        <img src={img3} alt="" height="750px" width="700px" className=" h-full" />
                    </div> */}


                </Slider>
            </div>

        </div>
    );
};

export default Offer;