const TripPhoto = ({ img }) => {
  return (
    <div className="card-img">
      <img src={img} alt="" height="200px" />
    </div>
  );
};

export default TripPhoto;
