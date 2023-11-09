import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import BookingCard from "./BookingCard";
import axios from "axios";
import Swal from "sweetalert2";



const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


   
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        axios.get(url , {withCredentials : true})
        .then(res => setBookings(res.data))

    }, [url]);

    const handleDelete = id => {
        
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                            }
                          });
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        
    }

    const handleUpdate = (id,date) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({date })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
    }

    
    return (
        <div>
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
           
                    <thead>
                        <tr>
                            
                            <th>Image</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Check In</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingCard
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></BookingCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;