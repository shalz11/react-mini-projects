const Thumbnail = ({ thumbnailUrl, index, thumbnailClickHandler }) => {
  return (
    <div
      onClick={() => thumbnailClickHandler(index)}
      className="thumbnail-container"
    >
      <img src={thumbnailUrl} alt={thumbnailUrl} />
    </div>
  );
};

export default Thumbnail;
