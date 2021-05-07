import TripPhoto from "./TripPhoto";
import TripContent from "./TripContent";

const Trips = ({ trips, removeTrip }) => {
  return (
    <div className="trips-container">
      <div className="title">
        <h1>Our Trips</h1>
        <div className="underline"></div>
      </div>
      {trips.map((trip) => (
        <div className="trip-card" key={trip.id}>
          <TripPhoto img={trip.photo} />
          <TripContent {...trip} removeTrip={removeTrip} />
        </div>
      ))}
    </div>
  );
};

export default Trips;
