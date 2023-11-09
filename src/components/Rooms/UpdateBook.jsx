import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
    const id = useParams();
    const navigate = useNavigate();


    const handleBookHere = event => {
        event.preventDefault();
        console.log('clicked')
        const date = event.target.date.value;
        
        fetch(`https://hotel-website-server-rouge.vercel.app/bookings/${id.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({date })
        })
            .then(res => res.json())
            .then(data => {
                console.log("data",data)
                Swal.fire(`Data updated for id, ${id.id}`)
                navigate("/bookings")
                
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

export default UpdateBook;