import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const ReviewHere = ({ details }) => {

    // console.log('dddddddddddddd', details)
    const { roomDescription, _id, roomImages } = details;
    const { user } = useContext(AuthContext);

    const handleReviewHere = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const email = user?.email;

        const timestamp = new Date();
         console.log(timestamp)

        const review = {
            customerName: name,
            email,
            roomImages,
            description,
            rating,
            timestamp,
            roomTitle:roomDescription,
            title:_id,
        }

        console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })

    }


    return (
        <div className="mt-20">
            <h2 className='text-center text-3xl'>Rate Your Experience: </h2>
            <form onSubmit={handleReviewHere}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <select type="text" name="rating" placeholder="Rating" className="input input-bordered w-full">
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>

                            </select>
                        </label>
                    </div>

                    <div className="mb-8 col-span-2 row-span-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="name" className="input input-bordered" />
                    </div>
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn  btn-accent btn-block" type="submit" value="Submit review" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default ReviewHere;