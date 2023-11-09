

const ShowReviewCard = ({ review }) => {

    console.log(review);

    const {customerName , description , rating ,  roomImages , timestamp  }=review;

    const currentDate = new Date();
    const timeDifference = currentDate - timestamp;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return (
        <div className="mt-5">
            <div className="card card-compact">
                <figure><img src={roomImages} alt="Shoes" className="rounded" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{customerName}</h2>
                    <p>Rating{rating}/5</p>
                    <p>{description}</p>
                    <p>{daysAgo}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowReviewCard;