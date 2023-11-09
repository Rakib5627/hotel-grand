import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/offer1.jpg"
import img2 from "../../assets/offer2.jpg"
import img3 from "../../assets/offer3.jpg"
import img4 from "../../assets/offer4.png"


const Offer = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <div className='w-3/4 m-auto'>
            <div className="mt-20">
                <Slider {...settings}>

                    <div className="mx-2">
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={img1} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Discount
                                    <div className="badge badge-secondary text-xs lg:text-base">20%</div>
                                </h2>
                                <p>Get Discount on Single Room</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card ">
                            <figure><img src={img4} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Couple Room
                                    <div className="badge badge-secondary">20%f</div>
                                </h2>
                                <p>Get 20% Discount On Honeymoon</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <figure><img src={img2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Double Delux
                                    <div className="badge badge-secondary">20%</div>
                                </h2>
                                <p>20% Discount on double delux room</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <figure><img src={img3} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                   Executive Room
                                    <div className="badge badge-secondary">20%</div>
                                </h2>
                                <p>20% discount on executive room</p>
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