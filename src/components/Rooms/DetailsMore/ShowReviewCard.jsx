import PropTypes from 'prop-types';

const ShowReviewCard = ({ review }) => {


    const {customerName , description , rating ,  roomImages   }=review;

    // const currentDate = new Date();

    // console.log(currentDate.toString() , timestamp.toString() )
    // const timeDifference = currentDate - timestamp;
    // const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return (
        <div className="mt-5">
            <div className="card card-compact">
                <figure><img src={roomImages} alt="Shoes" className="rounded" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{customerName}</h2>
                    <p>Rating{rating}/5</p>
                    <p>{description}</p>
                    <p> 0 Day Ago</p>
                </div>
            </div>
        </div>
    );
};

ShowReviewCard.propTypes ={
    review: PropTypes.object
}

export default ShowReviewCard;