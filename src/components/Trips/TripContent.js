import { useState } from "react";

const TripContent = ({ id, name, price, description, removeTrip }) => {
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "Read Less" : "Read More";

  return (
    <div className="card-content">
      <div className="card-title">
        <div className="trip-name">
          <span>{name}</span>
        </div>
        <div className="trip-price">
          <span>${price}</span>
        </div>
      </div>
      <div className="card-summary">
        <p>
          {readMore ? description : `${description.substring(0, 200)}...`}
          <button
            className="btn-more-desc"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {linkName}
          </button>
        </p>
      </div>

      <div className="delete-btn">
        <button className="btn-no-interest" onClick={() => removeTrip(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TripContent;
