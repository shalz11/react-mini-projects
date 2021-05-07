import Loading from "./Loading";

import { useState, useEffect } from "react";
import TripsData from "./data";
import Trips from "./Trips";
import "./Trips.css";

const OurTrips = () => {
  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    setLoading(true);
    try {
      //const response = await fetch("http://localhost:8000/trips");
      //const result = await response.json();
      setLoading(false);
      //setTrips(result);
      setTrips(TripsData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTripHandler = (id) => {
    const newTrips = trips.filter((item) => item.id !== id);
    setTrips(newTrips);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  if (loading) {
    return (
      <div className="trips-container">
        <Loading />
      </div>
    );
  }
  if (trips.length === 0) {
    return (
      <div className="trips-container">
        <div className="title">
          <h1>Our Trips</h1>
          <div className="underline"></div>
          <h3 className="no-trips">No trips left !!</h3>
          <button className="btn-refresh" onClick={() => fetchTrips()}>
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return <Trips trips={trips} removeTrip={removeTripHandler} />;
};

export default OurTrips;
