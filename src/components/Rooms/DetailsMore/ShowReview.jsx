import { useEffect, useState } from "react";
import ShowReviewCard from "./ShowReviewCard";
import PropTypes from 'prop-types';


const ShowReview = ({ serve }) => {



    const [reviews, setReviews] = useState([]);

    // const url = `localhost:5000/reviews/${title}`;

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${serve}`)
            .then(res => res.json())
            .then(data => setReviews(data))



    }, [serve]);

    return (
        <div className="mt-20">

            <p className="text-3xl text-center font-bold">Our Customer Reviews</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    reviews.map(review =><ShowReviewCard
                         key={review._id}
                         review={review}

                    >
                    </ShowReviewCard> )
                }
            </div>

        </div>
    );
};

ShowReview.propTypes = {
      serve : PropTypes.string
}

export default ShowReview;