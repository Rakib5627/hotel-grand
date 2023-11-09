import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const BookHere = () => {

    const bookHere = useLoaderData();
    const { roomDescription, _id, pricePerNight, roomImages } = bookHere;
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleBookHere = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            roomImages,
            date,
            title: roomDescription,
            service_id: _id,
            price: pricePerNight
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Booked Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate("/bookings")
                }
            })

    }

    return (
        <div>
            <h2 className='text-center text-2xl font-semibold'>You are 1 step away!</h2>
            <form onSubmit={handleBookHere}>
                <div className="grid grid-cols-1 gap-6">


                    <div className="form-control w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" required className="input input-bordered" />
                    </div>


                    <div className="card mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{roomDescription}

                            </h2>
                            <p>Price {pricePerNight}$</p>

                        </div>
                    </div>
                </div>
                <div className="form-control mt-6 w-1/2 mx-auto">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default BookHere;